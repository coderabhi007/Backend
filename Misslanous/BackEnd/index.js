const express=require("express")
const app=express()
let port=8080
app.listen(port,(req,res)=>{
    console.log("server is running on port:",port)
})
app.use(express.urlencoded({extended:true}))//now express will understand data
app.use(express.json())//for jason data
app.get('/register',(req,res)=>{
    let{user,password}=req.query
    res.send(`userName${user} get`)
})
app.post('/register',(req,res)=>{
    console.log(req.body)
    let{user,password}=req.query
    res.send(`userName${user} post`);
})