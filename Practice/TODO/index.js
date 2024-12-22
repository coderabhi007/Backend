const express=require('express')
const path=require('path')
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

const app=express()
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
let port=8080;
let tasks=[{
    id:uuidv4(),
    content:"study",
    status:"pending"
},]
let sendTask=tasks;
let sort="all"
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})
app.get("/",(req,res)=>{
    console.log("main route")
    res.redirect('/task')
})
app.get("/task",(req,res)=>{
   // console.log("redirectd route")
    res.render("show.ejs",{tasks:sendTask,sort:sort})
})
app.get('/task/new',(req,res)=>{
    res.render("new.ejs")
})
app.post('/task',(req,res)=>{
    //console.log(req.body)
    let task={id:uuidv4(),
        content:req.body.content,
        status:"pending"
    }
    tasks.push(task)
    res.redirect('/task')
})
app.get('/task/edit/:id',(req,res)=>{
    let id=req.params.id
    //console.log(id);
   // res.send("you are in edit section")
   let task=tasks.find((task)=>task.id===id)
   if(task){
    res.render("edit.ejs",{task})
   }
   else
   {
    res.send("no correct task")
   }
})
app.patch("/task/:id",(req,res)=>{

    let id=req.params.id
    let task=tasks.find((task)=>task.id===id)
    task.content=req.body.content
    task.status=req.body.status
    res.redirect('/task')
 
})
app.delete('/task/:id',(req,res)=>{
    console.log("delete")
    let id=req.params.id
     tasks=tasks.filter((task)=>(task.id!==id))
     sendTask=tasks
    res.redirect('/task')}
)
app.post('/task/sort', (req, res) => {
    const sortStatus = req.body.sort || "all";
    let filteredTasks;
    console.log(sortStatus)
    if (sortStatus === "all") {
       // Show all tasks
       sort="all"
       sendTask=tasks
    } else {
        sort=sortStatus
      sendTask = tasks.filter(task => task.status === sortStatus); // Filter by status
    }
  
    res.redirect('/task')
  });