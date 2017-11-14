/*
 * mongoose数据库连接
 */

const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/lagou'

const options = {
  useMongoClient: true
}

mongoose
  .connect(uri, options)
  .then((db) => {console.log('数据库连接成功~')})
  .catch((err) => {console.log(err)})

module.exports = mongoose
