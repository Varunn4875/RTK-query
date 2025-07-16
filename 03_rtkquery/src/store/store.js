import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../api/todosApi";
const store= configureStore({
    reducer:{
        //here these reducers are added dynamically
        //refer todosAPI page
        [todosApi.reducerPath]:todosApi.reducer,

    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware()
    .concat(todosApi.middleware)
})
export default store; 