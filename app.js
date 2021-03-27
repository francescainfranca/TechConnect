const express = require('express');
const bodyParser = require('body-parser');

const pug = require('pug');

const app = express();

//middle ware /routing


app.listen(8080,function(){
    console.log('The server is running on 8080');
});