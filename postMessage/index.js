const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.end(200);
// });

app.use(express.static(__dirname));

app.listen(8080);