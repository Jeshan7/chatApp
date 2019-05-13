var socket = io.connect('http://localhost:3000');

var mesage = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('btn'),
    output = document.getElementById('output');

btn.addEventListener('click', () =>{

  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  })
})
