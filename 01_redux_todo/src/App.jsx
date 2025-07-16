import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addTodo,deleteTodo } from "./store/todoSlice"
function App() {
  const todos=useSelector(state=> state.todos)
  const dispatch=useDispatch()

  const [newTodo, setNewTodo]=useState("")
  // console.log(todos);
  const handleTodo=()=>{
    const newTodoItem={id:Date.now(), text:newTodo, completed:false}
    dispatch(addTodo(newTodoItem))
  }
  const handleDelete=(id) =>{
    dispatch(deleteTodo(id)) 
  }
  
  return (
    <>
      <h1>React-Redux</h1>
      <input
      type="text"
      value={newTodo}
      onChange={(e)=> setNewTodo(e.target.value)}
      placeholder="Enter new todo"
      > 
      </input>
      <button onClick={handleTodo}>Add</button>
      {todos.map( todo =>(
        <h2 key ={todo.id}>
          <span>{todo.text}</span>
          <span>({todo.completed ? 'Done': 'pending'})</span>
          <button onClick={ ()=>handleDelete(todo.id)}>Delete</button>
        </h2>
      ))}
      <aria/>
    </>
  )
}

export default App
