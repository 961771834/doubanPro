//搭建本地服务器 

const express = require("express");
const request = require("request");
const path = require("path");
const app = express();



//静态文件
app.use(express.static(__dirname + "/public"));
//cors

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.get("/getMovieListData", (req, res) => {
    let message = JSON.parse(req.query.message);
    request(`https://api.douban.com/v2/movie/${message.movieType}?start=${message.start}&count=${message.count}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    });
})

app.get("/getMovieDetailData", (req, res) => {
    console.log("uj")
    request('https://api.douban.com/v2/movie/subject/' + req.query.id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    });
})


app.get("/getSearchMovieData", (req, res) => {
    let message = JSON.parse(req.query.message);
    request(`https://api.douban.com/v2/movie/search?start=${message.start}&count=${message.count}&q=${encodeURI(message.keyword)}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
            res.send(body)
        }
    });
})


//将其他路由指向
app.get("*",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"public","index.html"));
})

app.listen(3008, () => {
    console.log("running....")
})