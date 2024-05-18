const http = require('http')
http
  .createServer((request, response) => {
    response.end('Hello node')
  })
  .listen(3000)
