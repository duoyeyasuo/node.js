let epxress = require("express");

let app = epxress();
app.get("/",(req,res)=>{
    res.render("index.ejs")
})
let data = require("./cityData.min.json");

app.get("/province",(req,res)=>{
    let province = [];
    data.forEach(item=>{
        province.push(item.n)
    })
    res.json(province)
})

app.get("/city",(req,res)=>{
    let cities = [];
    let province = req.query.province;
    data.forEach(item=>{
        if (item.n == province) {
            item.s.forEach(item1=>{
                cities.push(item1.n)
            })
        }
    })
    res.json(cities);
})

app.get("/country",(req,res)=>{
    let countries = [];
    let city = req.query.city;
    data.forEach(item=>{
        item.s.forEach(item1=>{
            if(item1.s){
                if(item1.n == city){
                    item1.s.forEach(item2=>{
                    countries.push(item2.n)
                    })
                }
            }
            
        })
    })
    res.json(countries);
})

app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})





