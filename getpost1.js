const express = require('express');
const app = express();
const PORT = 3000;

app.get('/getRequest',(req,res) =>{
    res.send("GET Request Called")
});

app.post('/postRequest',(req,res)=>{
    res.send("POST Request Called")
});

app.listen(PORT,
    function (err){
        if (err) console.log(err);
        console.log("Server Listening on PORT",PORT);
    });