const db = require('../utils/database.js')

// 定义Schema
const schema = new db.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  roles: {
    type: String,
    required: true
  }
})

// 定义model
const User = db.model('users', schema)

module.exports = User
