var express = require('express');
var db = require("../../models/db")
var router = express.Router();

// 渲染后台分类列表页面
router.get('/', function (req, res, next) {
    res.render("admin/category_list")
});

// 渲染后台添加分类页面
router.get('/add', function (req, res, next) {
    res.render("admin/category_add")
});

// 渲染后台修改分类页面
router.get('/edit', function (req, res, next) {
    res.render("admin/category_edit")
});

// 处理添加分类请求
router.post('/add', function (req, res, next) {
    // 1) 得到数据 
    // let ctitle = req.body.ctitle;
    // let csort = req.body.csort;

    // 2) 验证数据的合法性 

    // 3）向数据库插入数据
    db.insertCats(req.body,function(result){
        if(result == 1){
            res.send('添加分类成功了 <a href="/admin/cats">查看分类列表</a>')
        }else{
            res.send('添加分类失败了 <a href="/admin/cats">查看分类列表</a>')
        }
    });
});

module.exports = router;
