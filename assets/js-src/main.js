var $chatHistory = $("#chat-history"),
    $msgBox = $("#msg-box");

var socket = io.connect('http://localhost:3000');

socket.on('welcome', function (data) {
    appendMessage('> ' + data.nick + ' joined the room');
});

socket.on('message', function (data) {
    appendMessage(data.msg);
});

$(document).on("click", "#send", function (e) {
    e.preventDefault();

    var msg = $msgBox.val();

    socket.emit('message', {msg: msg});

    $msgBox.val('');
});


function appendMessage(msg) {
    $chatHistory.append('<div>' + msg + '</div>');
    $chatHistory.scrollTop($chatHistory.scrollHeight);
}