// create server

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./UserRoutes')

const app = express();

//to see result of get Method
app.use(bodyParser.urlencoded({extended:false}));

//to see result of post method
app.use(express.json());

//api calls
app.use("/api/v1",router);
// app.use(router);

const port = 4000;

app.listen(port,()=>{
    console.log(`app started at port number ${port}`);
})

//get
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})


