
let initialState={

    isLoading:false ,
    data:[],
    error:null

}


export default function apiReducer(state=initialState,action){
    switch (action.type) {
        
        case "REQUESTAPI":{
            return {...state , isLoading:true}
        }
        
        case "SUCCESSAPI":{
            return {...state , isLoading:false , data:action.payload }
        }
        
        case "FAILDAPI":{
            return {...state , isLoading:false , error:action.payload }
        }
            
    
        default:
            return state 
    }
}