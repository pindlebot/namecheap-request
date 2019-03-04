const fetch = require('node-fetch')
const set = require('lodash.set')
const parseString = require('xml2js').parseString

const ip = require('./ip')
const commands = require('./commands')
const schema = require('./schema')

const get = (obj, path) => path.reduce((acc, val) =>
  acc[val] ? acc[val] : undefined, obj)

function parse (xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, data) => {
      if (err) reject(err)
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

class Namecheap {
  constructor (config = {}) {
    this.config = config
  }

  async request (params = {}) {
    if (!this.ipAddress) {
      this.ipAddress = await ip()
    }

    let mergedParams = {
      ApiKey: process.env.NAMECHEAP_API_KEY,
      UserName: process.env.NAMECHEAP_USER_NAME,
      ApiUser: process.env.NAMECHEAP_API_USER,
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
        let response = data.ApiResponse
        if (response.Errors.length && response.Errors[0]) {
          return Promise.reject(response.Errors)
        }
        return response.CommandResponse
      })
  }

  merge (obj = {}) {
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

  ns (SLD, TLD, Nameserver) {
    this.merge({ SLD, TLD, Nameserver })
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

const baseMethods = {
  domains: Domains,
  users: Users,
  ssl: SSL,
  whoisguard: Whoisguard
}

commands.forEach(command => {
  const path = command.split('.')
  const requiredParams = get(schema, path).filter(p =>
    p.required === 'Yes' && p.name.indexOf('.') < 0
  )

  const base = baseMethods[path.shift()]

  set(base.prototype, path, function(params = {}) {
    let errors = []
    requiredParams.forEach(({ name, description }) => {
      if (!this.config[name] && !params[name]) {
        description = description.slice(0, 1).toLowerCase() + description.slice(1)
        errors.push(`${name} is required. ${name} is a ${description}.`)
      }
    })

    if (errors.length) {
      errors.forEach(err => console.error(err))
    }
    this.config.Command = 'namecheap.' + command
    return this.request(params)
  })
})

module.exports = {
  domains: config => new Domains(config),
  users: config => new Users(config),
  ssl: config => new SSL(config),
  whoisguard: config => new Whoisguard(config)
}
