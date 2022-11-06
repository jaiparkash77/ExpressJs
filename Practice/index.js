// create server

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

const port = 4000;

app.listen(port,()=>{
    console.log(`app started at port number ${port}`);
})

app.get("/", (req,res)=>{
    // res.send("<h1>Hello World</h1>");
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.post("/api/v1/register", (req,res)=>{
    res.send(`<h1>Done Mr. ${req.body.name}</h1> <h2>Your email is ${req.body.email}</h2><h3>Your Password is ${req.body.password}</h3>`);

    console.log(req.body)
})