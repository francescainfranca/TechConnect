const express = require('express');

const port=8080;
const app = express();

//middle ware /routing
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/student_form.html',function(request,response){
    response.sendFile('student_form.html')
});

app.post('/student_form.html',function(request,response){
    console.log(request.body);
});

app.listen(port,function(){
    console.log("Server on port 8080");
});