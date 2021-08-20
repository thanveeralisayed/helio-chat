const app = require('express')();
const http = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(http);
const PORT = process.env.PORT || 5000

io.on('connection',(socket)=>{
    console.log(socket.id);
    socket.on('create-room',name=>{
        console.log('room name is', name);
    })
})


http.listen(PORT, () => {
  console.log(`litsening on ${PORT}`);
});