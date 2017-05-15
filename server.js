const babelConfig = require('./babel.config.js')
require('babel-register')(babelConfig)
require('babel-polyfill')

var http = require('http');
var express = require('express');
var app = express();
app.use('/assets', express.static(__dirname + '/client/assets'))
app.use('/public', express.static(__dirname + '/webroot/assets'))
app.use('/index', express.static(__dirname + '/client/index.html'))

// 创建服务端
http.createServer(app).listen('8080', function() {
	console.log('启动服务器完成');
});