const { schema } = require('../src/schema')
const { EnhancedMap } = require('serialize-map')
const commands = require('../src/commands')
let map = EnhancedMap.create().fromJSON(schema)
const fs = require('fs')
let md = ''
commands.forEach(command => {
  let inside = ''
  if (command.indexOf('domains.dns') > - 1) {
    inside = 'SLD, TLD'
  } else if (command.indexOf('domains.ns') > -1) {
    inside = 'SLD, TLD, Nameserver'
  } else if(command.indexOf('domains.transfer') > -1) {
    inside = 'TransferID'
  }
  let title = command.split('.').join(`().`) + '()'
  md += '\n'
  md += `### ${title.trim()}\n`
  
  let method = map.getIn(command)
  md += '#### Parameters\n'
  method.forEach(method => {
    let name = method.name ? method.name.trim() : ''
    let str = `- **${name}**`
    if (method.required && method.required.trim() === 'Yes') {
      str += ' (required) - '
    } else {
      str += ' (optional) - '
    }

    str += `${method.type ? method.type.trim() : ''}`

    str += '\n'
    md += str
  })
})

fs.writeFileSync('out.md', md, { encoding: 'utf8' })