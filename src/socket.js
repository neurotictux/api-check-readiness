const secketio = require('socket.io')

module.exports server => {
  const io = secketio(server)
  io.on('connection', socket => {
    console.log('usuário conectado')
  })
}