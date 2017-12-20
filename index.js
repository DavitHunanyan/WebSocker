var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

http.listen(3000,function(){
    console.log("listen 3000 port");
});
io.on('connection',function(socket){
    console.log("connection");
    socket.on('message',function(data){
        console.log(data);
        io.emit('new message', data);
    })

})