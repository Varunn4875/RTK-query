import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input,setInput]=useState("")
  const [users,setUsers]=useState(()=>{
    const stored=localStorage.getItem("todoUsers");
    return stored ? JSON.parse(stored) : []
  })
  useEffect(()=>{
    localStorage.setItem("todoUsers", JSON.stringify(users));
  },[users])

 const handleSubmit=()=>{
  setUsers(previousUsers =>[...previousUsers,{id:Date.now(),name:input}])
  setInput("")
 }
 const handleDelete=(id)=>{
  {}

  setUsers(users.filter(item=>item.id !=id))

 }
  return (
    <>
    <h1>todo List</h1>
    <input type='text' placeholder='enter your task' value={input}onChange={(event)=>setInput(event.target.value)}/>
    <button onClick={handleSubmit}>Add</button>
   
  {users.map((items)=>(
    <div className=' container mt-10 align-items-center varun' key={items.id}>
      {items.name}
      <li>
      <button onClick={() =>handleDelete(items.id)}>Delete</button>
      <button>Completed</button>
      </li>
    </div>
  ))}
    </>
  )
}

export default App
