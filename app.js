var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Chat server listening at http://%s:%s', host, port);
});

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/assets/index.html');
});

io.on('connection', function (socket) {
    socket.on('message', function (data) {
        console.log('message', data);
        io.sockets.emit('message', data);
    });

    socket.emit('welcome', {nick: socket.id});
});