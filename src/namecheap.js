const ip = require('./ip')
const fetch = require('node-fetch')
const parseString = require('xml2js').parseString
const commands = require('./commands')
const { schema } = require('./schema')

const get = (obj, path) => path.reduce((acc, val) => 
  acc[val] ? acc[val] : undefined, obj)

function parse(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, data) => {
      resolve(data)
    })
  })
}


const createUrl = (params) => {
  let url = 'https://api.namecheap.com/xml.response?'

  return url + Object.keys(params)
    .map(key => {
      return `${key}=${encodeURIComponent(params[key])}`
    }).join('&')
}

let ipAddress

class Namecheap {
  constructor(config = {}) {
    this.config = config
  }

  async request (params = {}) {
    if (!this.ipAddress) {
      this.ipAddress = await ip()
    }

    let mergedParams = {
      ClientIp: this.ipAddress,
      ...params,
      ...this.config
    }

    if (!mergedParams.UserName) {
      mergedParams.UserName = mergedParams.ApiUser
    }
    
    const url = createUrl(mergedParams)
    return fetch(url)
      .then(resp => resp.text())
      .then(text => parse(text))
      .then(data => {
        let response = data['ApiResponse']
        if (response.Errors.length) {
          return Promise.reject(response.Errors)
        }
        return response
      })
  }

  merge(obj = {}) {
    obj = Object.keys(obj).reduce((acc, val) =>
      typeof obj[val] !== 'undefined'
        ? (acc[val] = obj[val], acc)
        : acc 
    , {})
    this.config = {
      ...this.config,
      ...obj
    }
  }
}

class Domains extends Namecheap {
  dns (SLD, TLD) {
    this.merge({ SLD, TLD })
    return this
  }

  ns(SLD, TLD, Nameserver) {
    this.merge({ SLD,  TLD, Nameserver })
    return this
  }

  transfer (TransferID) {
    this.merge({ TransferID })
    return this
  }
}

class Users extends Namecheap {
  address (AddressId) {
    this.merge({ AddressId })
    return this
  }
}

class SSL extends Namecheap {}
class Whoisguard extends Namecheap {}

const classes = {
  domains: Domains,
  users: Users,
  ssl: SSL,
  whoisguard: Whoisguard
}

commands.forEach(command => {
  let path = command.split('.')
  let requiredParams = get(schema, path)
  let base = classes[path.shift()]
  
  // function run (...args) {
  //  let params = {}
  //  this.config.Command = 'namecheap.' + command
  //  if (
  //    args.length && 
  //    args.length === 1 &&
  //    typeof args[0] === 'object'
  //  ) {
  //    params = args[0]
  //  } else {
  //    let names = template
  //      .map(t => t.name.trim())
  //      .filter(name => !this.config[name])
  //
  //    params = args.reduce((acc, arg, i) =>
  //      (acc[names[i]] = arg, acc)
  //    , {})
  //  }

  //  return this.request(params)
  //}

  function run(params = {}) {
    requiredParams.forEach(param => {
      if (!this.config[param.name] && !params[param.name]) {
        throw new Error(param.name + ' is required')
      }
    })
    this.config.Command = 'namecheap.' + command
    return this.request(params)
  }

  if(path.length > 1) {
  	let [methodName, subMethodName] = path
    let method = base.prototype[methodName]
    method[subMethodName] = run
  } else {
    base.prototype[path[0]] = run
  }
})

module.exports = {
  domains: config => new Domains(config),
  users: config => new Users(config),
  ssl: config => new SSL(config),
  whoisguard: config => new Whoisguard(config)
}
