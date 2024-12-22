const express=require('express')
const { v4: uuidv4 } = require('uuid')
const app=express()
let port=8080;
var methodOverride = require('method-override')
const path=require('path')
app.use(methodOverride('_method'))
app.set("view engine",'ejs')
app.set('viwes',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.listen(port,(req,res)=>{
    console.log("server is running on port "+port)
})
let posts=[
    {
        id:uuidv4(),
        username:"apana_collage",
        content:"coding is love"
    },
    {  
        id:uuidv4(),
        username:"sujal",
        content:"coding is bad"
    },
    {
        id:uuidv4(),
        username:"gaurav101",
        content:"paneer is love"
    }
]
app.get('/posts',(req,res)=>{
    //res.send("Server is working Well")
    res.render("index.ejs",{posts:posts})
})
app.get('/posts/new',(req,res)=>{
    res.render("new.ejs")
})
app.get('/posts/:id',(req,res)=>{
    let id=req.params.id
    let post=posts.find((p)=> id===p.id)
    console.log(post)
    res.render("view.ejs",{post})
})
app.get('/posts/:id/edit',(req,res)=>{
    let id=req.params.id
    let post=posts.find((p)=> id===p.id)
    res.render("edit.ejs",{post})
})
app.post('/posts',(req,res)=>{
  let {username,content}=req.body;
  let id=uuidv4()
  posts.push({username,content,id})
 res.redirect('/posts')
})
app.patch('/posts/:id',(req,res)=>{
    let id=req.params.id
    //console.log(req.body.content)
    let post=posts.find((p)=> id===p.id)
    post.content=req.body.content
    res.redirect('/posts')
})
app.delete('/posts/:id',(req,res)=>{
    let id=req.params.id
    posts=posts.filter((post)=>id!==post.id)
    res.redirect('/posts')
})