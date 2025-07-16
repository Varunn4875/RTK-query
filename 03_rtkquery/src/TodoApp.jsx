import { useGetTodosQuery,useAddTodoMutation,useDeleteTodoMutation } from "./api/todosApi";
import { useState } from "react";
function TodoApp(){
    const [value,setValue]=useState("")
//the data , isLoading, error are the responses we can get from UseGetTodosQuery
//here we set data as todos and delcare an empty array for todos to prevent the error
//if the datas are not fetched

        const {data: todos=[], isLoading, error} = useGetTodosQuery()
          //query will retun as objects
         
        //mutiation will give array so need to destructure with array
        const [addTodo,{isLoading:isAdding}]=useAddTodoMutation()
        const [deleteTodo]=useDeleteTodoMutation()

        
        const handleAddTodo= async()=>{
                 
            await addTodo({title:value,completed:false})
                 
        }
        const handleDeleteTodo=async (id)=>{
            await deleteTodo(id)
        }



        return(
            <>
            <h2>Todos List</h2>

          { isLoading && <p>Loading...</p>}

        <div>
            <input 
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}>
            </input>
            <button onClick={handleAddTodo}>Add</button>
        </div>
        { !isLoading && todos.map(todo =>(
            <h3 key={todo.id}>{todo.title}({todo.completed?"done":"pending"})
            <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button></h3>
        ))}
            </>
        )
    
}
export default TodoApp