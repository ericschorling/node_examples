const http = require('http')
const map = require('through2-map')
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants')



const server = http.createServer(function (request, response){
    request.pipe(map(function(chunk){
        return chunk.toString().split('').map((e)=>e.toUpperCase()).join('')
    })).pipe(response)
})

server.listen(process.argv[2])