import { createSlice } from "@reduxjs/toolkit"

let userSlice = createSlice({

    name:"user", 
    initialState:[],

    reducers:{

        addUser:(state , action)=>{
             state.push({id:Date.now() , name:action.payload })
        } , 

        removeUser :(state , action)=>{
            return state.filter((user)=>user.id !=action.payload )
        }
    }


})

export default userSlice