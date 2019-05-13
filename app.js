const express = require('express');
// const handle = require('express-handlebars');
const socket = require('socket.io');
// const path = require('path');

var app = express();

// app.engine('handlebars',handle());
// app.set('view engine','handlebars');



// app.get('/', (req, res) => {
//   r es.render('chat', {});
// })

var server = app.listen(3000, ()=>{
  console.log("Connected");
})

app.use(express.static('public'));
var io = socket(server);

io.on('connection', (socket)=>{
  console.log('Socket Connected', socket.id);

  socket.on('chat', (data )=>{
    io.sockets.emit('chat', data)
  })
})
