let fs = require("fs").promises;

let p1 = fs.readFile("a.txt","utf-8");
let p2 = fs.readFile("b.txt","utf-8");
let p3 = fs.readFile("c.txt","utf-8");

Promise.race([p1,p2,p3]).then((value)=>{
    console.log(value)
}).catch(reason=>{
    console.log(reason)
})

// 只有三个promise都成功了，才会走then的第1个函数
/* Promise.all([p1,p2,p3]).then(value=>{
    console.log(value)  // [ 'aaa', 'bbb', 'ccc' ]
}).catch(reason=>{
    console.log(reason)
}) */

// p1.then((value)=>{
//     console.log(value)
// }).catch(reason=>{
//     console.log(reason)
// })
















