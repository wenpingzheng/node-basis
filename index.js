var http = require('http')
var othermodule = require('./module/index.js')

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  if(request.url != '/favicon.ico') {
    console.log('server')
    // othermodule['xz3'](response)
    response.end()
  }
}).listen(8099)
console.log('server running at http://localhost:8099/')

// function xz1(res) {
//   res.write('hello xz1')
// }

