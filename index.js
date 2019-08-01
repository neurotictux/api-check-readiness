const path = require('path')
const { startCheckReadiness } = require('./src/readiness')
const jsonFile = path.join(__dirname, 'requests.json')

startCheckReadiness(jsonFile)