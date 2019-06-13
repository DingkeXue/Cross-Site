const express = require('express');

const app = express();
// 接口
app.get('/', (req, res) => {
   res.send(200);
});
app.get('/api/jsonp', (req, res) => {
   const {msg, cb} = req.query;
   console.log(cb);
   res.end(`${cb}('hello world')`);
});

app.listen(8080);