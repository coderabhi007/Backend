const express=require('express')
const app=express()
require('dotenv').config()
//let port=3000;
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
/*app.use((req,res)=>{
   // console.log(req)
    console.log("Request is listned")
    res.send("This is basic responce that i got")
})*/
/*app.get('/apple',(req,res)=>{
    res.send({
        name:"Abhishek",
        color:'Yellow'
    })
})*/
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get('/:username/:id',(req,res)=>{
    let {username,id}=req.params;
    res.send(`Hello ${username} your id is ${id}`)
})
app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send("no result")
})