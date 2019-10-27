var http = require('http')
var url = require('url')
var optfile = require('./libs/optfile')
var route = require('./module/route')


http.createServer(function(request, response) {
  if(request.url != '/favicon.ico') {
    var pathname = url.parse(request.url).pathname
    pathname = pathname.replace(/\//, '')
    route[pathname](request, response)
    console.log('主程序结束')
  }
}).listen(8099)
console.log('server running at http://localhost:8099/')

