const http = require('http')
const bl = require('bl')
let urls = []


http.get(process.argv[2], (res)=> {
    res.pipe(bl(function(err, data){
        console.log(data.toString())
    }))
    res.on('end', function(){
        http.get(process.argv[3], (res)=> {
            res.pipe(bl(function(err, data){
                console.log(data.toString())
            }))
            res.on('end', function(){
                http.get(process.argv[4], (res)=> {
                    res.pipe(bl(function(err, data){
                        console.log(data.toString())
                    }))
                })
            })
        })
    })
})