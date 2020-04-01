let fs = require("fs");
function readFile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf8",(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    });
}
readFile("name.txt").then((value)=>{
    // console.log(value);  // age.txt
    return readFile(value)
},(reason)=>{
    console.log(reason)
}).then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
})


