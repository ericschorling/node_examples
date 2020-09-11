const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("filename:", (name)=>{
    fs.readFile(name, 'utf8', (err, content)=>{
        if (err){console.log('please select a file')}
        let data = (content.split('').map(e=> typeof(e) ==='string'?e.toUpperCase():e).join(''))
        fs.writeFile('data.txt', data, (err)=>{
            if (err) {console.log('oops no writing')}
            console.log('file written')
        })
    })
    rl.close()
})