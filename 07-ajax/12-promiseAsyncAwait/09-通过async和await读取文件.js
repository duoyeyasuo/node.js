/* let fs = require("fs");
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
 */


let fs = require("fs").promises;
async function readFile(file){
    // async和await它让我们的代码看起来更像同步代码
    let res = await fs.readFile(file,"utf-8")
    let r = await fs.readFile(res,"utf-8")
    return r;
}
console.log(readFile("name.txt").then(value=>console.log(value)))