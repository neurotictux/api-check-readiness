const fs = require('fs')

const { runRequest } = require('./request')
const { notifyError, notifySuccess } = require('./notifier')

let missing = 0
let errors = []
let totalServicesCount = 0

function requestFinish(e) {
  if (e)
    errors.push(e)
  missing--
  if (missing === 0) {
    errors.forEach(p => console.log('\x1b[31m%s\x1b[0m', JSON.stringify(p)))
    if (errors.length)
      notifyError(`${errors.length}/${totalServicesCount} serviço(s) com problema.`)
    else
      notifySuccess(`${totalServicesCount} serviços OK.`)
    errors = []
  }
}

const run = filePath => {

  if (!fs.existsSync(filePath))
    return console.log('\x1b[31m%s\x1b[0m', `${filePath} não localizado`)

  const endpoints = JSON.parse(fs.readFileSync(filePath, 'utf-8')).filter(p => p.enabled)
  missing = endpoints.length
  totalServicesCount = missing

  endpoints.forEach(p => {
    runRequest(p)
      .then(() => requestFinish())
      .catch(e => requestFinish(e))
  })
}

const startCheckReadiness = (requestsFilePath, time) => {
  run(requestsFilePath)
  setInterval(() => run(requestsFilePath), (time || 60) * 1000)
}

module.exports = {
  startCheckReadiness
}