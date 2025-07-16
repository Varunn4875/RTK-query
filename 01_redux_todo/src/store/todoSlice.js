// const initialState=[
//     {id:1, text:'learn react',completed:false},
//     {id:2, text:'dfdhf',completed:true}
// ]
// function todoReducer(state=initialState,action){
//     console.log(action);
//      if (action.type =='ADD_TODO'){
//         return [...state,action.payload]
//      }
//       else if (action.type =='DELETE_TODO'){
//         return state.filter(todo => todo.id !=action.payload)

//      }
//     return state  //enna return pandromo adhu dhan todos la save aagum 
//     //action will come from the component
    

// }
// export default todoReducer

import { createSlice } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo: (state, action)=>{
            state.push(action.payload)
        },
        deleteTodo:(state, action)=>{
            return state.filter(todo => todo.id !=action.payload)
        }

    }
})
export const {addTodo, deleteTodo} =todoSlice.actions
export default todoSlice.reducer