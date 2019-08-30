export default server => {
  const io = socketIo(server)
  io.on('connection', socket => {
    console.log('usuário conectado')
  })
}