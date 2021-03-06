const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.post('/movies/add',(req,res)=>{
    if(req.body.title === undefined || req.body.year === undefined || isNaN(parseInt(req.body.year)) || (parseInt(req.body.year / 1000) == 0 )|| (parseInt(req.body.year/10000) != 0)){
        res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    }else{
        movies.push({title:req.body.title,year:req.body.year,rating:req.body.rating || 4});
        res.send({status:200,data:movies})
    }
});
app.get('/movies/read',(req,res)=>res.send(movies));
app.get('/movies/read/by-date',(req,res)=>{
    res.send({status:200,data:movies.sort((a,b)=>a.year - b.year)});
});
app.get('/movies/read/by-rating',(req,res)=>{
    res.send({status:200,data:movies.sort((a,b)=>b.rating - a.rating)});
});
app.get('/movies/read/by-title',(req,res)=>{
    res.send({status:200,data:movies.sort((a,b)=>{
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    })
})})
app.get('/movies/read/id/:ID',(req,res)=>{
    if(req.params.ID<movies.length && req.params.ID >= 0){
        res.send({status:200, data:movies[req.params.ID]});
    }else{
        res.send({status:404, error:true, message:'the movie <ID> does not exist'});
    }
});
app.put('/movies/update/',(req,res)=>{
    if(req.body.ID<movies.length && req.body.ID >= 0){
        movies[req.body.ID].title = req.body.title || movies[req.body.ID].title;
        movies[req.body.ID].rating = req.body.rating || movies[req.body.ID].rating;
        movies[req.body.ID].year = parseInt(req.body.year) || movies[req.body.ID].year;
        res.send({status:200,data:movies})
    }else{
        res.send({status:404, error:true, message:'the movie <ID> does not exist'});
    }
});
app.delete('/movies/delete',(req,res)=>{
    if(req.body.ID<movies.length && req.body.ID >= 0){
        movies.splice(req.body.ID,1);
        res.send({status:200,data:movies})
    }else{
        res.send({status:404, error:true, message:'the movie <ID> does not exist'});
    }
});

