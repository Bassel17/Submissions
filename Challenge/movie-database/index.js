const express = require('express');
const app = express();
const port = 3000;
app.listen(port, ()=>console.log(`listing on port ${port}`));
app.get('/test', (req, res) =>res.send({status:200, message:"ok"}));
let date = new Date();
let time = date.getHours() + ":" + date.getMinutes()
app.get('/time',(req,res)=>res.send({status:200, message:time}));
app.get('/hello/:id',(req,res)=>res.send({status:200,message:`Hello, ${req.params.id}`}));
app.get('/hello',(req,res)=>res.send({status:200,message:`Hello`}));
app.get('/search',(req,res)=>{
    if(req.query.s == undefined || req.query.s ==''){
        res.send({status:500, error:true, message:"you have to provide a search"});
    }
    res.send({status:200,message:'ok',data:req.query.s});
});