// create server

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();

//to see result of get Method
app.use(bodyParser.urlencoded({extended:false}));

//to see result of post method
app.use(express.json());

const port = 4000;

app.listen(port,()=>{
    console.log(`app started at port number ${port}`);
})

//get
app.get("/", (req,res)=>{
    // res.json({
    //     name:"Jai",
    //     email: "jai@gmail.com",
    //     password: 'jai'
    // })
    res.sendFile(path.join(__dirname + "/index.html"))
})

//post
app.post("/api/v1/register",(req,res)=>{

    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success:true,
        name: userName,
        email: userEmail,
        password: userPassword,
    })
})
