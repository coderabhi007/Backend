const express=require("express")
const app=express();
const path=require('path')
app.set('views',path.join(__dirname,'/views'));//special case if we donot run from this dirctoory
app.set('view engine','ejs')
let port=8080
app.use(express.static(path.join(__dirname,"public/css")))//it would be automaticaly avalable to all the routes it woud be served
app.use(express.static(path.join(__dirname,"public/js")))
app.listen(port,(req,res)=>{
    console.log(`listening on port${port}`)
})
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.get('/rolldice',(req,res)=>{
    let diceVal=Math.floor(Math.random()*6+1)
    res.render('rolldice.ejs',{num:diceVal})
})
app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    let instadata = require('./data.json');
    let data = instadata[username];

    if (data) {
        res.render('instagram.ejs', { data: data });
        console.log(data);
    } else {
        // Handle the case where the username does not exist in the data
        res.render('error.ejs');
    }
});