import { createSlice } from "@reduxjs/toolkit"


let initialState={
    value:0
}


let counterSlice = createSlice({
    
    name:"counter" , 
    
    initialState,
    
    reducers:{
        increase:(state)=>{
             state.value+=1
      }   ,

      decrease:(state)=>{
            state.value-=1
      }


    }
    

})


export default counterSlice