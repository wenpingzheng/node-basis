var optfile = require('../libs/optfile')
var url = require('url')
// var querystring = require('querystring')


// 根据pathname值 找到对应的处理函数
module.exports = {
  login: function(req, res) {
    // get方式
    var rdata = url.parse(req.url, true).query
    if(rdata['email']) {
      console.log('参数',rdata)
    }

    // post方式
    // var post = ''
    // req.on('data', function(chunk) {
    //   post += chunk
    // })
    // req.on('end', function(){
    //   post = querystring.parse(post)
    //   console.log('post参数', post)
    // })
    
    var arr =['email', 'pwd']
    res.writeHead(200, {'Content-Type': 'text/html'})
    function recall(data) {
      for(var i = 0 ;i<arr.length;i++) {
        re = new RegExp('{'+arr[i]+'}','g')
        data = data.replace(re, rdata[arr[i]])
      }
      res.write(data)
      res.end()
    }
    optfile.readfile('./views/login.html', recall)
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