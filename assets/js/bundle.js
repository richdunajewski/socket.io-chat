(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
