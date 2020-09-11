const mymodule = require('./mymodular.js')

const dir = process.argv[2]
const filterStr = process.argv[3]

mymodule(dir,filterStr,function callback(err,list){

    if(err) {console.log(err)
    }
    for (let file of list){
        console.log(file)
    }
})
