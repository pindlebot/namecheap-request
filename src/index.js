const fetch = require('node-fetch')
const parseString = require('xml2js').parseString;

const createUrl = (params) => {
  var url = 'https://api.namecheap.com/xml.response?'

  return url += Object.keys(params).map(key => {
    return `${key}=${encodeURIComponent(params[key])}`
  }).join('&')
}

function parse(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, data) => {
      resolve(data)
    })
  })
}

function get(data, arr, def = null) {
  return arr.reduce((acc, val) => acc && acc[val] ? acc[val] : def, data)
}

function mapFields(json) {
  return get(
    json, [
      'ApiResponse', 
      'CommandResponse', 
      0, 
      'DomainCheckResult'
    ]
  ).map(x => x['$'])

}

function Namecheap (args) {

  var params = Object.assign({}, {
    Command: 'namecheap.domains.check'
  }, args) 

  return function(domains) {
    
    params.DomainList = domains;

    var url = createUrl(params)
  
    return fetch(url)
    .then(resp => resp.text())
    .then(text => parse(text))
    .then(json => mapFields(json))
  }
}

module.exports = Namecheap