var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  // 创建集合
  var dbase = db.db("student");

  dbase.collection("score").find({}).toArray(function (err, result) { // 返回集合中所有数据
    if (err) throw err;
    console.log(result);
    /* [
      { _id: 5e797045967ae00f7074cb9e, '英语': 99 },
      { _id: 5e7970c37f867b0e08284506, '语文': 89 },
      { _id: 5e7970c37f867b0e08284507, '数字': 80 },
      { _id: 5e7970c37f867b0e08284508, '计算机': 100 }
    ] */
    db.close();
  });
});







