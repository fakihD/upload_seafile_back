// ---- MANAGE DATABASE
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Body Parser
let urlencodedParser = bodyParser.urlencoded({
    extended: true,
});
app.use(urlencodedParser);
app.use(bodyParser.json({type:"*/*"}));

app.listen(3010);

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Routes
app.use('/cloud',require('./Cloud/cloudRoute'));