var list = require('./search-list.json')
var buyLimit = require('./buy-limit.json')
module.exports = function () {
  return {
    'list.php': list,
    'buyLimit.php':buyLimit
  }
}
