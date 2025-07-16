import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"


const store = configureStore({
    //todos is a key name 
    reducer: {
        todos:todoReducer
    }

})
export default store