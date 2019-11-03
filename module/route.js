var optfile = require('../libs/optfile')

// 根据pathname值 找到对应的处理函数
module.exports = {
  login: function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    function recall(data) {
      res.write(data)
      res.end()
    }
    optfile.readfile('../views/login.html', recall)
  },
  demo: function(req, res) {
    res.write('我是DEMO')
    res.end()
  },
  writefile: function(req, res) {
    function recall(data) {
      res.write(data)
      res.end()
    }
    optfile.writefile('./views/xz.txt', '我是小郑', recall)
  },
  showimg: function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})
    optfile.readImg('./images/xz.jpeg', res)
  }
}