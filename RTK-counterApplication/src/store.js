import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



let store = configureStore({
    reducer:counterSlice.reducer
})


export default store

