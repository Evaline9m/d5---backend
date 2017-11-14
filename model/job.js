const db = require('../utils/database.js')

// 定义Schema
const schema = new db.Schema({
  "name": {
    type: String,
    required: true
  },
  "oprice": {
    type: String,
    required: true
  },
  "nprice": {
    type: String,
    required: true
  },
  "companyLogo": {
    type: String,
    required: true
  },
  "findname": {
    type: String,
    required: false
  }
})

// 定义model
const Job = db.model('jobs', schema)

module.exports = Job
