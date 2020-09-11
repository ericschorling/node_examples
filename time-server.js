const net = require('net')
const myDate = new Date()
const month = myDate.getMonth() >=10? myDate.getMonth()+1 : `0${myDate.getMonth()+1}`
const dateStr = `${myDate.getFullYear()}-${month}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}`
console.log(dateStr)
const server = net.createServer(function (socket){
    socket.write(`${dateStr}\n`)
    socket.end()
})  
server.listen(process.argv[2])