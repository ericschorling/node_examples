const net = require('net')
const fs = require('fs')
const http = require('http')

const server = http.createServer(function (request, response){
    stream = fs.createReadStream(process.argv[3])
    stream.pipe(response)
    console.log(stream)
})  
server.listen(process.argv[2])