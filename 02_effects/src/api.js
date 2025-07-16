const API_BASE_URL='http://localhost:3001'


export async function fetchTodos(params) {
    const response=await fetch(`${API_BASE_URL}/todos`)
    const todos=await response.json()
    return todos
    
}