const dns = require('dns')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Domain Name:', function(name){
    dns.lookup(name, function(err,ipaddress){
        console.log(`IP Address: ${ipaddress}`)
    })
    rl.close()
})
