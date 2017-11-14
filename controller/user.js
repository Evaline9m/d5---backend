const User = require('../model/user.js')
const { getParam } = require('../utils/utils.js')
const bcrypt = require('bcrypt')

const signUp = function (req, res) {
  const { username, password, email, roles } = req.body
  User.findOne({username})
    .then((user) => {
      if (user) {
        res.json(getParam({success: false}))
      } else {
        // bcrypt 算法加密密码
        bcrypt.hash(password, 10)
          .then((password) => {
            // mongoose model 的一个实例，初始化文档的数据
            const willSaveUser = new User({
              username,
              password,
              email,
              roles,
            })
            // 数据存储（入库）
            willSaveUser.save().then(() => {
              res.json(getParam({success: true}))
            })
          })
      }
    })
}

const signIn = function (req, res) {
  const { username, password } = req.body
  User.findOne({username})
    .then((user) => {
      if (!user) {
        res.json(getParam({login: false}))
      } else {
        bcrypt.compare(password, user.password)
          .then((result) => {
            if (result) {
              // 存储session
              req.session.username = user.username
              res.json(getParam({
                login: true,
                username: user.username
              }))
            } else {
              res.json(getParam({login: false}))
            }
          })
      }
    })
}

// 判断用户是否登录接口
const isLogin = function (req, res) {
  res.json(getParam({
    login: req.session.username ? true : false,
    username: req.session.username
  }))
}

// 用户注销
const logout = function (req, res) {
  req.session = null
  res.json(getParam({
    logout: true
  }))
}

module.exports = { signUp, signIn, isLogin, logout }
