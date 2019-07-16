
const express= require('express');
const mongoose = require('mongoose');
const user= require('./user')
const bodyParser= require('body-parser')
const cors = require('cors');
// const os
const app= express();

const port = process.env.PORT||5000;

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
//cors
// app.use(cors());
//route returning message to the client
app.get('/api', (req,res)=>{
   res.send({xpress : '==== helloo ===='})
    
})

app.get('/api2', (req,res)=>{
    res.send({express: "===========  Get method =========="})
})
app.post('/postApi', (req,res)=>{
    console.log(req.body);
    
        // res.send({express: "--------------Hello From Express post------------"})
        res.send(res.body.username);
    
    console.log("---------- Saved Successfully ------------");
    // res.send(`i received your post request.This is what you sent me: ${req.body.name}`)

})



app.listen(port,function(){
    console.log(`Listening on port ${port}`);
})

// mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true })
// .then((err,db)=>{
//     if(err) throw err;
//     console.log("////////////////////database connected////////////////////");
// })







