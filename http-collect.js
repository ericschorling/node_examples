const http = require('http')
const bl = require('bl')

let returnArr = [];
http.get(process.argv[2], (res) =>{
    res.pipe(bl(function(err, data){

        console.log(data.toString().length)
        console.log(data.toString())
    }))
})
returnString = returnArr.join('')
