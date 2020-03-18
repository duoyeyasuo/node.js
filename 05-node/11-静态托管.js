let http = require("http")
let url = require("url")
let fs = require("fs")
let path = require("path")
http.createServer((req, res) => {
    let trueUrl = "http://" + req.headers.host + req.url;
    let urlObj=url.parse(trueUrl)
    // let data=""
    switch (urlObj.pathname) {
        case "/":
            fs.readFile("./index.html","utf-8", (err, data) => {
                if (err) throw err;
                res.end(data)
            })
            break;
        default:
            // data = "<h1>啥也没有啊...</h1>"
            res.end("<h1>啥也没有啊...</h1>");
    }
    // res.end(data)
}).listen(3001, () => {
    console.log("服务器启动了...")
})