var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var cookieSession = require('cookie-session')

var apiRoute = require('./routes/api.js')

// 设置静态路径
app.use(express.static(path.join(__dirname, 'public')))

// 配置body解析器
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 使用服务器客户断数据通信的中间件
app.use(cookieSession({
  name: 'session',
  secret: 'some random charactors',
  maxAge: 1000 * 60 * 60 * 24
}))

// 使用路由
app.use('/api', apiRoute)

// 监听端口号
app.listen(process.env.PORT || '3000')
