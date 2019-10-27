var http = require('http')
var url = require('url')
var optfile = require('./libs/optfile')
var route = require('./module/route')


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/jpeg'})
  if(request.url != '/favicon.ico') {
    // var pathname = url.parse(request.url).pathname
    // pathname = pathname.replace(/\//, '')
    // route[pathname](request, response)
    response.write('xzxz')
    optfile.readImg('./images/xz.jpeg', response)
    console.log('主程序结束')
  }
}).listen(8099)
console.log('server running at http://localhost:8099/')

