const http = require('http')
const express = require('express')
const path = require('path')

const socket = require('./src/socket')
const { startCheckReadiness } = require('./src/readiness')
const jsonFile = path.join(__dirname, 'requests.json')

const app = express()
app.use('/users', (req, res) => res.json([{}, {}]))
const server = http.createServer(app)
socket(server)
startCheckReadiness(jsonFile)
server.listen(3000)