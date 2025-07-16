import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //  /react is important


export const todosApi= createApi({
    reducerPath:'todosApi',
    baseQuery: fetchBaseQuery({
    baseUrl:'http://localhost:3001',
    }),
    tagTypes: ['Todo'],
    endpoints:(builder)=>({

        //get todos fetch all todos
        getTodos: builder.query({
            query: ()=> 'todos',
            providesTags:['Todo'],
        }),
        //POST /todos = create a todo
        addTodo: builder.mutation({
            query:(newTodo)=>({
                url:'todos',
                method:'POST',
                body:newTodo
            }),
            invalidatesTags:['Todo'],
        }),
        //DELETE todo 
        deleteTodo: builder.mutation({
            query:(id)=>({
                url:`todos/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['Todo'],
        })

    }),

})
//getTodos => will be read as useGetTodosQuery
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useDeleteTodoMutation}  = todosApi;