import { createSlice } from "@reduxjs/toolkit"

let todoSlice = createSlice({

    name:"todo", 
    initialState:[],

    reducers:{

        addTodo:(state , action)=>{
             state.push({id:Date.now() , task:action.payload })
        } , 

        removeTodo :(state , action)=>{
            return state.filter((todo)=>todo.id !=action.payload )
        }
    }


})

export default todoSlice