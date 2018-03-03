function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const ip = require('./ip');

const fetch = require('node-fetch');

const parseString = require('xml2js').parseString;

const commands = require('./commands');

const schema = require('./schema');

const get = (obj, path) => path.reduce((acc, val) => acc[val] ? acc[val] : undefined, obj);

function parse(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, data) => {
      resolve(data);
    });
  });
}

const createUrl = params => {
  let url = 'https://api.namecheap.com/xml.response?';
  return url + Object.keys(params).map(key => {
    return `${key}=${encodeURIComponent(params[key])}`;
  }).join('&');
};

let ipAddress;

class Namecheap {
  constructor(config = {}) {
    this.config = config;
  }

  request(params = {}) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!_this.ipAddress) {
        _this.ipAddress = yield ip();
      }

      let mergedParams = Object.assign({
        ApiKey: process.env.NAMECHEAP_API_KEY,
        UserName: process.env.NAMECHEAP_USER_NAME,
        ApiUser: process.env.NAMECHEAP_API_USER,
        ClientIp: _this.ipAddress
      }, params, _this.config);

      if (!mergedParams.UserName) {
        mergedParams.UserName = mergedParams.ApiUser;
      }

      const url = createUrl(mergedParams);
      return fetch(url).then(resp => resp.text()).then(text => parse(text)).then(data => {
        let response = data['ApiResponse'];

        if (response.Errors.length) {
          return Promise.reject(response.Errors);
        }

        return response;
      });
    })();
  }

  merge(obj = {}) {
    obj = Object.keys(obj).reduce((acc, val) => typeof obj[val] !== 'undefined' ? (acc[val] = obj[val], acc) : acc, {});
    this.config = Object.assign({}, this.config, obj);
  }

}

class Domains extends Namecheap {
  dns(SLD, TLD) {
    this.merge({
      SLD,
      TLD
    });
    return this;
  }

  ns(SLD, TLD, Nameserver) {
    this.merge({
      SLD,
      TLD,
      Nameserver
    });
    return this;
  }

  transfer(TransferID) {
    this.merge({
      TransferID
    });
    return this;
  }

}

class Users extends Namecheap {
  address(AddressId) {
    this.merge({
      AddressId
    });
    return this;
  }

}

class SSL extends Namecheap {}

class Whoisguard extends Namecheap {}

const classes = {
  domains: Domains,
  users: Users,
  ssl: SSL,
  whoisguard: Whoisguard
};
commands.forEach(command => {
  let path = command.split('.');
  let requiredParams = get(schema, path).filter(p => p.required === 'Yes');
  let base = classes[path.shift()];

  function promise(params = {}) {
    let errors = [];
    requiredParams.forEach(({
      name,
      description
    }) => {
      if (!this.config[name] && !params[name]) {
        description = description.slice(0, 1).toLowerCase() + description.slice(1);
        errors.push(`${name} is required. ${name} is a ${description}.`);
      }
    });

    if (errors.length) {
      errors.forEach(err => console.error(err));
      throw new Error();
    }

    this.config.Command = 'namecheap.' + command;
    return this.request(params);
  }

  if (path.length > 1) {
    let [methodName, childMethodName] = path;
    let method = base.prototype[methodName];
    method[childMethodName] = promise;
  } else {
    base.prototype[path[0]] = promise;
  }
});
module.exports = {
  domains: config => new Domains(config),
  users: config => new Users(config),
  ssl: config => new SSL(config),
  whoisguard: config => new Whoisguard(config)
};