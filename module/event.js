var events = require('events')
function UserBean() {
  this.eventEmit = new events.EventEmitter()
  this.zhuce = function(req, res) {
    console.log('zc success!')
    this.eventEmit.emit('zc','aa','bb')
  }
  this.login = function(req,res) {
    res.write('login success')
  }
}

module.exports = UserBean;