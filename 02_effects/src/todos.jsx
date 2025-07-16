import { useEffect, useState } from "react";
import { fetchTodos } from "./api";



function Todos(){
    const [todos, setTodos]=useState([])

    // useEffect( async()=>{
    //     const todosFromServer= await fetchTodos()
    //     setTodos(todosFromServer)
    // },[])

    //here the format is wrong because we cannot use async function into an 
    //useeffect because that is also an async function 

    //so correct way is 

           async function loadTodos(params) {
            const todosFromServer=await fetchTodos()
            setTodos(todosFromServer)
        }
        
        useEffect(() => {
            loadTodos()
   
        }, [])

    return(
        <>
        <h2>Todos</h2>
        { isLoading && <p>Loading...</p>}

        
        { !isLoading && todos.map(todo =>(
            <h3 key={todo.id}>{todo.title}({todo.completed?"done":"pending"})</h3>
        ))}

        </>
    )

}
export default Todos