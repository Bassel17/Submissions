const express = require('express');
const app = express();
const port = 3000;
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
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

app.get('/movies/add',(req,res)=>res.send("add"));
app.get('/movies/read',(req,res)=>res.send(movies));
app.get('/movies/update',(req,res)=>res.send("update"));
app.get('/movies/delete',(req,res)=>res.send("delete"));