const { schema } = require('../src/schema')
const { EnhancedMap } = require('serialize-map')
const commands = require('../src/commands')
let map = EnhancedMap.create().fromJSON(schema)
const fs = require('fs')
commands.forEach(command => {
  let args = map.getIn(command)
  let _args = []
  args.forEach(arg => {
    _args.push(
      Object.keys(arg).reduce((acc, val) => {
        acc[val] = arg[val].trim()
        return acc
      }, {})
    )
  })
  map.setIn(command, _args)
})

fs.writeFileSync('updated.json', JSON.stringify(map.toJSON()), { encoding: 'utf8' })
