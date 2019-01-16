let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
connections=[];
users=[];

io.on('connection', (socket) => {
  // Log whenever a user connects

  console.log('user connected , %s sockets connected',connections.length);




  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function(){
    if(!socket.username) return;
    users.splice(users.indexOf(socket.username),1);
    connections.slice(connections.indexOf(socket),1);
    console.log('user disconnected , %s sockets connected',connections.length);
  });

  socket.on('join',function (data) {
    socket.join(data.room);
    socket.username=data.user;
    users.push(socket.username);
    console.log(users);
    io.emit('nombreOfOnlien',users);
   // console.log(data.user + 'join the room : '+data.room);
    socket.broadcast.to(data.room).emit('new user joined', {user:data.user,message:'has joined this room '});

  });



  socket.on('leave',function (data) {

    socket.leave(data.room);
    console.log(data.user + 'left the room : '+data.room);
    socket.broadcast.to(data.room).emit('left room', {user:data.user,message:'has left this room '});

  });

  socket.on('message',function(data){

    io.in(data.room).emit('new message', {user:data.user, message:data.message});
  });


  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on('message', (message) => {
    console.log("Message Received: " + message);
    io.emit('message', {type:'new-message', text: message});
  });


});


// Initialize our websocket server on port 5000
http.listen(5000, () => {
  console.log('started on port 5000');
});
