let epxress = require("express");
let path = require("path")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/paging";
let app = epxress();

app.use(epxress.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    // res.render("03-ajax普通分页.ejs")
    // res.render("04-ajax分页之加载更多.ejs")
    res.render("05-滚动加载.ejs")
})

// =================== 滚动加载
app.get("/news",(req, res)=>{
    for(let i=0; i<1000000000; i++);
    let pagesize = 8;
    let page = req.query.page || 1;
    (page <= 0) && (page = 1);
    let offset = (parseInt(page) - 1) * pagesize;
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paging");
        dbo.collection("news").find().skip(offset).limit(pagesize).toArray(function (err, result) {
            if (err) throw err;
            res.json(result)
            db.close();
        });
    });
})


/* // =================== 使用ajax的加载更多
app.get("/news",(req, res)=>{
    for(let i=0; i<1000000000; i++);
    let pagesize = 3;
    let page = req.query.page || 1;
    (page <= 0) && (page = 1);
    let offset = (parseInt(page) - 1) * pagesize;
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paging");
        dbo.collection("news").find().skip(offset).limit(pagesize).toArray(function (err, result) {
            if (err) throw err;
            res.json(result)
            db.close();
        });
    });
})
 */
/* // =================== 使用ajax的普通分页
app.get("/news",(req, res)=>{
    let pagesize = 3;
    let page = req.query.page || 1;
    (page <= 0) && (page = 1);
    let offset = (parseInt(page) - 1) * pagesize;
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paging");
        dbo.collection("news").find().skip(offset).limit(pagesize).toArray(function (err, result) {
            if (err) throw err;
            dbo.collection("news").find().count().then((value)=>{
                let total = value;
                let size = Math.ceil(total / pagesize)
                res.json({
                    data:result,
                    page, // 当前第几页
                    pagesize, // 每页显示条数 
                    total, // 总共的新闻条数 
                    size, // 总的页数
                })
            }).catch((reason)=>{
                console.log(reason)
            })
            db.close();
        });
    });
}) */



/* // =================== 传统的分页 (不使用ajax，通过服务端渲染来实现)
app.get("/", (req, res) => {
    let pagesize = 3; // 每一页显示多少条数据
    let page = req.query.page || 1; // 当前是第几页    前端没有传递page page就是undefined
    // if(page <= 0){
    //     page = 1;
    // }
    (page <= 0) && (page = 1);

    // console.log(parseInt(page))
    // console.log(typeof parseInt(page))
    let offset = (parseInt(page) - 1) * pagesize; // 偏移量
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paging");
        dbo.collection("news").find().skip(offset).limit(pagesize).toArray(function (err, result) {
            if (err) throw err;
            // 查看news中有多少条数据
            dbo.collection("news").find().count().then((value)=>{
                let total = value;
                // 计算多少页
                let size = Math.ceil(total / pagesize)

                res.render("02-传统分页显示新闻列表.ejs",{
                    data:result,
                    page, // 当前第几页
                    pagesize, // 每页显示条数 
                    total, // 总共的新闻条数 
                    size, // 总的页数
                })
            }).catch((reason)=>{
                console.log(reason)
            })
            db.close();
        });
    });

}) */

/* // =================== 查询出所有的数据
app.get("/",(req,res)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("paging");
        dbo.collection("news"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            res.render("01-传统不分布显示新闻列表.ejs",{data:result})
            db.close();
        });
    });
    
}) */
app.listen(3000, () => {
    console.log("服务器在3000端口启动了~")
})





