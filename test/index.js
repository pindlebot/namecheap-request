require('dotenv').config()
const namecheap = require('../src')

namecheap.domains({
  ApiKey: process.env.NAMECHEAP_API_KEY,
  UserName: process.env.NAMECHEAP_USER,
  ApiUser: process.env.NAMECHEAP_USER
  // Command: 'namecheap.domains.dns.setHosts',
}).create()
  .then(resp => {
    console.log(resp)
  })
  .catch(err => {
    console.log(JSON.stringify(err))
  })
