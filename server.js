const express = require('express');

const https = require('https');
const fs= require('fs');
const crypto=require('crypto');
const cookies=require('cookies');

const port=process.env.PORT || 8080;
const app = express();

const cors = require('cors');

//calling database
const mongoose = require('mongoose');
require('dotenv').config();

//fix mongoose :C
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//middle ware /routing
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/',function(request,response){
    response.sendFile('index.html');
});

app.get('/index.html',function(request,response){
    response.sendFile('index.html');
});

app.get('/student_form.html',function(request,response){
    response.sendFile('student_form.html');
});

const uri = process.env.ATLAS_URI;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
   console.log("MongoDB dtabase connection established successfully");

});

const usersRouter = require('./user');

app.use('/user', usersRouter);

app.post('/',function(request,response){
    console.log(request.body);//replace with verification
    //send cookies
    response.sendFile(__dirname + '/public/student_dashboard.html');
});

app.post('/student_form.html',function(request,response){
    console.log(request.body);//replace with 
});

https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'Ch@0t1c_G00d_P0gg1ng'
},app).listen(port,function(){
    console.log('Server on port '+port);
});