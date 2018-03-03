const BASE_URI = 'https://www.namecheap.com/support/api/methods/'
const fetch = require('node-fetch')
const camelCase = require('lodash.camelcase')
const JSDOM = require('jsdom').JSDOM
const commands = require('../src/commands')
const db = require('./db')
const endpoints = [
  'domains/get-list.aspx',
  'domains/get-contacts.aspx',
  'domains/create.aspx',
  'domains/get-tld-list.aspx',
  'domains/set-contacts.aspx',
  'domains/check.aspx',
  'domains/reactivate.aspx',
  'domains/renew.aspx',
  'domains/get-registrar-lock.aspx',
  'domains/set-registrar-lock.aspx',
  'domains/get-info.aspx',
  'domains-dns/set-default.aspx',
  'domains-dns/set-custom.aspx',
  'domains-dns/get-list.aspx',
  'domains-dns/get-hosts.aspx',
  'domains-dns/get-email-forwarding.aspx',
  'domains-dns/set-email-forwarding.aspx',
  'domains-dns/set-hosts.aspx',
  'domains-ns/create.aspx',
  'domains-ns/delete.aspx',
  'domains-ns/getinfo.aspx',
  'domains-ns/update.aspx',
  'domains-transfer/create.aspx',
  'domains-transfer/get-status.aspx',
  'domains-transfer/update-status.aspx',
  'domains-transfer/get-list.aspx',
  'ssl/activate.aspx',
  'ssl/get-info.aspx',
  'ssl/parse-csr.aspx',
  'ssl/get-approver-email-list.aspx',
  'ssl/get-list.aspx',
  'ssl/create.aspx',
  'ssl/renew.aspx',
  'ssl/resend-approver-email.aspx',
  'ssl/resend-fulfillment-email.aspx',
  'ssl/reissue.aspx',
  'ssl/purchasemoresans.aspx',
  'ssl/revokecertificate.aspx',
  'ssl/editDCVMethod.aspx',
  'users/get-pricing.aspx',
  'users/get-balances.aspx',
  'users/change-password.aspx',
  'users/update.aspx',
  'users/create-add-funds-request.aspx',
  'users/get-add-funds-status.aspx',
  'users/create.aspx',
  'users/login.aspx',
  'users/reset-password.aspx',
  'users-address/create.aspx',
  'users-address/delete.aspx',
  'users-address/get-info.aspx',
  'users-address/get-list.aspx',
  'users-address/set-default.aspx',
  'users-address/update.aspx',
  'whoisguard/change-email-address.aspx',
  'whoisguard/enable.aspx',
  'whoisguard/disable.aspx',
  'whoisguard/unallot.aspx',
  'whoisguard/discard.aspx',
  'whoisguard/allot.aspx',
  'whoisguard/getlist.aspx',
  'whoisguard/renew.aspx'
]

function getHtml (url, index) {
  return fetch(url)
    .then(resp => resp.text())
    .then(text => {
      let dom = new JSDOM(text)
      let { document } = dom.window
      let table = document.querySelector('table.items')
      let keys = [...table.querySelectorAll('th')].map(t => t.textContent)
      let rows = [...table.querySelectorAll('tr')]
      let data = []

      rows.forEach(row => {
        let values = [...row.querySelectorAll('td')].map(t => t.textContent)
        let acc = values.reduce((acc, val, i) => {
          let key = camelCase(keys[i].replace('?', ''))
          acc[key] = val
          return acc
        }, {})
        if (Object.keys(acc).length) {
          data.push(acc)
        }
      })

      return data
    })
    .then(val => {
      let key = commands[index]
      console.log(key)
      db.get('schema').push({ [key]: val }).write()
    })
}
const wait = ms => new Promise((resolve) => setTimeout(() => resolve(ms), ms))

async function run () {
  let index = 0
  while (endpoints.length) {
    let endpoint = BASE_URI + endpoints.shift()
    console.log(index)
    let resolved = await getHtml(endpoint, index)
    await wait(3000)
    index++
  }
}

run()
