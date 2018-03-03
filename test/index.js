const namecheap = require('../src/namecheap')

namecheap.domains({
  ApiKey: process.env.NAMECHEAP_API_KEY,
  UserName: 'brainprotips',
  ApiUser: 'brainprotips',
  //Command: 'namecheap.domains.dns.setHosts',
}).check({DomainList: 'lorem.com'})
.then(resp => {
  console.log(resp)
})
.catch(err => {
  console.log(JSON.stringify(err))
})

/*let cheap = new Namecheap({
  ApiKey: process.env.NAMECHEAP_API_KEY,
  UserName: 'brainprotips',
  ApiUser: 'brainprotips',
  Command: 'namecheap.domains.dns.setHosts',
  SLD: 'cronjoy',
  TLD: 'com',
  HostName1: '_6465795ac8a947ae8c0477f974d6c5b9.cronjoy.com.',
  RecordType1: 'CNAME',
  Address1: '_3a394736fa3060e8d9c3ac9f8d784fed.acm-validations.aws.',
})*/