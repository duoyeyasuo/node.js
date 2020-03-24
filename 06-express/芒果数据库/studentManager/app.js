let epxress = require("express");
let student = require("./controller/student")
let app = epxress();
app.use(epxress.static("public"))
app.set("view engine","ejs");

// 服务端渲染
app.get("/byejs",student.showIndexByEjs);

// 客户端渲染  这个请求是学渲染页面
app.get("/byajax",student.showIndexByAjax);

// 服务器也可以提供api接口  就是返回json数据  让客户端渲染
app.get("/allstudent",student.allstudent)

app.listen(3000,()=>{
    console.log("服务器在3000端口运行起来了...")
})

// http://runoob.com/nodejs/nodejs-mongodb.html

