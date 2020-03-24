let db = require("../models/db")

exports.showIndexByEjs = (req,res)=>{
    // 得到数据库中真实数据，把页面和数据进行绑定后渲染
    db.getStudents(function(arr){
        res.render("indexByEjs",{
            "arr":arr
        })
    });
}

exports.showIndexByAjax = (req,res)=>{
    res.render("indexByAjax");
}

// 开一个接口 
exports.allstudent = (req,res)=>{
    db.getStudents(function(arr){
        res.json({"results":arr})
    });
}









