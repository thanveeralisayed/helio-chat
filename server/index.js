const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
app.use(express.json());
app.use(authRoutes);
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const socketio = require('socket.io');
const { addUser, getUser, removeUser } = require('./helper');
const io = socketio(http);
const mongoDB = "mongodb+srv://thanveer:pass@cluster0.yluhn.mongodb.net/heliochat?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{ useUnifiedTopology: true,useNewUrlParser:true } ).then(()=>console.log('connected')).catch(()=>console.log('error')); 
const PORT = process.env.PORT || 5000
const Room = require('./models/Room');


io.on('connection', (socket) => {
  console.log(socket.id);

  Room.find().then(result=>{
    console.log('rooms are ',result);
    socket.emit('output-rooms',result)
  })

  socket.on('create-room', name => {
    // console.log('room name is', name);
    const room = new Room({name});
    room.save().then(result=>{
      io.emit('room-created', result)
    })
  })

  socket.on('join', ({ name, room_id, user_id }) => {
    console.log(name + ' joined ' + room_id);
    const { error, user } = addUser({
      socket_id: socket.id,
      name,
      user_id,
      room_id
    })
    socket.join(room_id);
    if (error) {
      console.log('join error ' + error);
    }
    else {
      console.log('joined user is ' + user);
    }
  })

  socket.on('sendMessage', (message, room_id, callback) => {
    const user = getUser(socket.id);
    const msgToStore = {
      name: user.name,
      user_id: user.user_id,
      room_id,
      text: message
    }
    console.log('message ', msgToStore);
    io.to(room_id).emit('message', msgToStore);
    callback();
  })
  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
  });
});


http.listen(PORT, () => {
  console.log(`litsening on ${PORT}`);
});