'use strict'

const http = require('http')
const hostname = '127.0.0.1'
const port = 3333

const express = require('express')
const app = express();

const server = http.createServer(app)

const db = require('./db')

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`)
})


const rootController = (req, res)=>{
    const snippet = `<h1>Hello From the Root Route</h1>`
    res
        .status(220)
        .send(snippet)
        .end()
}

const fooController = (req, res)=>{
    const snippet = `<h1>This is the foo controller!!!!<\h1>`
    res.send(snippet)
}

const helloController = (req, res) => {
    let snippet = `<h1>Hello There!</h1>`
    if(req.params.name !== undefined){
        snippet = `<h1>Hello ${req.params.name}!</h1>`; 
    }
    // console.log('our request params',req.params)
    // const snippet = `<h1>Hello ${req.params.name}!</h1>`;
    res
        .status(200)
        .send(snippet)
        .end()
}
const monsterController = (req,res)=>{
    let snippet = '<h1>BOOO!!</h1>'
    if (req.params.name === undefined && db !== undefined) {
        snippet += `<ul>`;
        db.map(monster=>{
            snippet += `<li><a href="./monster/${monster.slug}">${monster.name}</a></li>`
        })
    }
    if (req.params.name !== undefined){
        snippet = `<h1>BOOO!!! It is ${req.params.name}<h1>`
        switch(req.params.name){
            case db[0].slug:
                snippet += `<h2>Called ${db[0].name} it is a ${db[0].species}</h2>`
                break;
            case db[1].slug:
                snippet += `<h2>Called ${db[1].name} it is a ${db[1].species}</h2>`
                break;
            case db[2].slug:
                snippet += `<h2>Called ${db[2].name} it is a ${db[2].species}</h2>`
                break;
            case db[3].slug:
                snippet += `<h2>Called ${db[3].name} it is a ${db[3].species}</h2>`
                break;
            //case 'wolfman'
        }
    }
    res 
        .status(200)
        .send(snippet)
        .end()
}

app.get("/monster/:name?", monsterController)
app.get('/', rootController);
app.get('/foo', fooController)
app.get('/hello/:name?', helloController)
