const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("filename:", (name)=>{
    fs.readFile(name, 'utf8', (err, content)=>{
        if (err){console.log('please select a file')}
        console.log(content.split('').map(e=> typeof(e) ==='string'?e.toUpperCase():e).join(''))

    })
    rl.close()
})