var http = require('http')
var url = require('url')
var route = require('./module/route')
var UserBean = require('./module/event')

http.createServer(function(request, response) {
  if(request.url != '/favicon.ico') {
    user = new UserBean()
    user.eventEmit.once('zc',function(name,pwd) {
      console.log(name + ',success')
      user.login(request, response)
      response.end()
    })
    user.zhuce(request, response)

    /*
    var pathname = url.parse(request.url).pathname
    pathname = pathname.replace(/\//, '')
    try {
      route[pathname](request, response)
    } catch (error) {
      console.log('xz',error);
      response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      response.write(error.toString());
      response.end();
    } */
    
    console.log('主程序结束')
  }
}).listen(8099)
console.log('server running at http://localhost:8099/')



