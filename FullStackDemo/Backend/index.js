import express from 'express'
const app=express()
let port=process.env.PORT || 3000
app.listen(port,(req,res)=>{
    console.log(`server is running on port  ${port}`)
})
const jokes = [
    {
      id: 1,
      title: "Why don't skeletons fight?",
      content: "Because they don't have the guts!",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "What’s orange and sounds like a parrot?",
      content: "A carrot!",
    },
    {
      id: 5,
      title: "Why don’t scientists trust atoms?",
      content: "Because they make up everything!",
    },
  ];
  
  
/*app.get('/',(req,res)=>{
    res.send("server is ready")
})*/
app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})