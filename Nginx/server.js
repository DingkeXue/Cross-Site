const express = require('express');
const app = express();
app.get('/', function (req, res) {
    let params = req.query(true);
    res.writeHead(200, {
        'Set-Cookie': 'Path=/;Domain=www.domain2.com;HttpOnly'
    });
    res.write(JSON.stringify(params));
    res.end("{user: 'lbb'}");
});

app.listen(8080);
