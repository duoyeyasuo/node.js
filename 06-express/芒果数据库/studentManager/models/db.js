// db.js 以前是操作文件  现在是操作数据库

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/xuesheng";
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   // 创建集合
//   var dbase = db.db("xuesheng");
//   dbase.createCollection('hs1024', function (err, res) {
//     if (err) throw err;
//     console.log("创建集合!");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/xuesheng";
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   // 创建集合
//   var dbase = db.db("xuesheng");
//   let data = [
//     {"name":"彭万里","age":28, "sex":"男", "provice":"河南"},
//     {"name":"高大山","age":24, "sex":"男", "provice":"北京"},
//     {"name":"谢大海","age":26, "sex":"男", "provice":"上海"},
//     {"name":"马继祖","age":21, "sex":"男", "provice":"河北"},
//     {"name":"程孝先","age":26, "sex":"男", "provice":"广州"},
//     {"name":"马宏宇","age":24, "sex":"男", "provice":"石家庄"},
//     {"name":"范长江","age":28, "sex":"男", "provice":"天津"},
//     {"name":"林君雄","age":29, "sex":"男", "provice":"河南"},
//     {"name":"李四光","age":20, "sex":"男", "provice":"河南"},
//   ];
//   dbase.collection("hs1024").insertMany(data,function(err, res){
//     if (err) throw err;
//     console.log("文档插入成功");
//     db.close();
//   })
// });

// 写一个model先测试数据是否OK，如果OK，再给控制器
exports.getStudents = function(callback){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/xuesheng";
     
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xuesheng");
        dbo.collection("hs1024"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            callback(result); // 数据传给控制 
            db.close();
        });
    });
}










