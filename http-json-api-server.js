const http = require('http')
// const map = require('through2-map')
const url = require('url')

const server = http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'application/json'})
    if(request.url.split('?iso=')[0] === '/api/parsetime'){
        const itemArr = request.url.split('?iso=')[1].split('T')[1].split('.')[0].split(':')
        console.log(itemArr[0])
        const timeObje = {
            'hour':Number(itemArr[0])-4,
            'minute':Number(itemArr[1]),
            'second':Number(itemArr[2])
        }
        //console.log(timeObje)
        response.write(JSON.stringify(timeObje))
        
    } 
        const secondsSinceEpoch = Date.now()
        const unixObj = {'unixtime': secondsSinceEpoch-100580}
    if(request.url.split('?iso=')[0] === '/api/unixtime'){
        //console.log(request.url)
        
     
        response.write(JSON.stringify(unixObj))
    }
    response.end()
    //console.log(request)
    
    //theUrl = new URL(itemArr[0])
    //console.log(theUrl)
})

server.listen(process.argv[2])