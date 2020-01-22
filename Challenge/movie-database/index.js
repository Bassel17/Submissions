function run(test,message){
    app.get(test, (req, res) => res.send(message));
}
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, ()=>console.log(`listing on port ${port}`));
let date = new Date();
let time = date.getHours() + ":" + date.getMinutes()
run('/test',{status:200, message:"ok"});
run('/time',{status:200, message:time});
