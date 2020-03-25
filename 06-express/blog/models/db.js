var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/wc_blog";
// 存储一个学生信息
function insertCats(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
        dbo.collection("cats").insertOne(data, function(err, res) {
            if (err){
                console.log("插入数据失败了~");
                // callback(err); // 把错误信息返回给上层  
                callback("-1"); // -1代表插入失败了
            };
            // callback('添加数据成功了 <a href="/admin/cats">查看分类列表</a>'); // 1代表插入数据成功了
            callback("1"); // 1代表插入数据成功了
            console.log("文档插入成功");
            db.close();
        });
    });
}
exports.insertCats = insertCats;



