import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// async action

export let postFetch = createAsyncThunk(

    "posts/postFetch" ,

    async ()=>{
         return await fetch("https://jsonplaceholder.typicode.com/posts") 
            .then((response)=>response.json())
            // we do not user here   .then((data)=>{})
            .catch((error)=>{throw error})
    }

)


//slice 

let postSlice = createSlice({
    name:"post" , 
    initialState:{
        posts:[],
        status:""
    },
    reducers:{} , //leave empty duto using async action and drop extraReducers
    
    extraReducers:(builder)=>{
        builder
            .addCase(postFetch.pending,(state)=>{
                    state.status="loading ..."
            }) 

            .addCase(postFetch.fulfilled,(state ,action)=>{
                state.status="success"
                state.posts=action.payload // passes response into posts state
            }) 

            .addCase(postFetch.rejected,(state)=>{
                 state.status="failed ..."
            }) 

    }

})
export default postSlice