const fs = require('fs');
const path = require('path')
module.exports = function (dir, extension, mycallback){
    
    fs.readdir(dir, function callback (err,list){
        let returnArr = []
        if(err){ return mycallback(err)};
        for (let file of list){
            if( path.extname(file) === ('.'+extension)){
                returnArr = [...returnArr, file]
            }
        }
        mycallback(null,returnArr)
    })
}