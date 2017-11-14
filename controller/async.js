var async = require('async')

async.waterfall([
  function (cb) {
    setTimeout(() => {
      cb(null, 'one')
    }, 1000)
  },

  function (arg, cb) {
    setTimeout(() => {
      cb(null, [arg, 'two'])
    }, 2000)
  }
], function (err, res) {
  console.log(res);
  console.timeEnd('test')
})
