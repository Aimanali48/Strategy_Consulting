const express = require('express'),
      path    = require('path'),
      app     = express(),
      server  = require('http').createServer(app),
      io      = require('socket.io')(server),
      ejs     = require('ejs');
      


app.set('port',process.env.PORT || 8000)
app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static('app/public'))
app.use(require('./routes/team'));
app.use(require('./routes/service'));
app.use(require('./routes/contact'));




app.get('/', function(req, res) {
    res.render('home');});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });


server.listen(app.get('port'), ()=>{
    console.log('connected to port '+ app.get('port'))
})