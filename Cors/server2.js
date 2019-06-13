const express = require('express');

const List = ["http://localhost:8080"];
const app = express();

app.use((req, res, next) => {
    let origin = req.headers.origin;
    if (List.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Headers", "name");
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Methods", "PUT");
        // if (req.method === "OPTIONS") {
        //     res.end();
        // }
    }
    next();
});

app.use('/getData', (req, res) => {
    res.end("跨域请求成功啦");
});

app.get('/getData', (req, res) => {
   res.end("跨域请求成功啦");
});
app.use(express.static(__dirname));
app.listen(8088);