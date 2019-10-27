var http = require('http')
var url = require('url')
var route = require('./module/route')

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  if(request.url != '/favicon.ico') {
    var pathname = url.parse(request.url).pathname
    pathname = pathname.replace(/\//, '')
    route[pathname](request, response)
    response.end()
  }
}).listen(8099)
console.log('server running at http://localhost:8099/')

