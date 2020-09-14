const express = require ('express')
const hostname = '127.0.0.1'
const port = 3334
const http = require ('http')
const app = express()

const server = http.createServer(app)

server.listen(port, hostname, ()=>{
    console.log(`I'm listening at ${port}`)
})

const rootController = (req, res) =>{
    res
        .status(200)
        .send('Hello World')
        .end()
}

const catController = (req, res) =>{
    res
        .status(200)
        .send('Meow!')
        .end()
}
const dogController = (req, res) =>{
    res
        .status(200)
        .send('Woof!')
        .end()
}
const catsanddogsController = (req, res) =>{
    res
        .status(200)
        .send('Dogs and cats living together... mass hysteria!')
        .end()
}

const greetController = (req, res) => {
    res
        .status(200)
        .send(`<h1>Hello ${req.params.name}</h1>`)
}


app.get('/', rootController)
app.get('/cats', catController)
app.get('/dogs', dogController)
app.get('/catsanddogs', catsanddogsController)
app.get('/:name?', greetController)