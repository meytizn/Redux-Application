import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import todoSlice from "./slices/todoSlice";



let store = configureStore({
    reducer:{
        users:userSlice.reducer ,
        todos :todoSlice.reducer
    }
})


export default store

