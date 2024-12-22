
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
 
      let [jokes,setJokes]=useState([])
      useEffect(()=>{
          axios.get('/api/jokes').then(
            (response)=>setJokes(response.data)
          ).catch((err)=>
            console.log(err)
          )
})
  return (
    <>
     <h1>Chai aur Full stack</h1>
    
    <h2>length{jokes.length}</h2>
    {
   
      jokes.map((joke)=>(
        <div key={joke.key}>
          <h1>joke id:{joke.id}</h1>
          <h2>title:{joke.title}</h2>
          <h4>content:{joke.content}</h4>
        </div>
      
      ))
  
    }
    </>
  )
}

export default App
