
let initialState ={
    counter : 0 
}



export default function counterReducer(state=initialState , action){
 switch (action.type) {
    case "ADD-TO-COUNTER":
        return {...state ,counter:state.counter+1}
    
    case "REMOVE-FROM-COUNTER":
        return {...state , counter:state.counter-1}
    
 
    default:
        return state
 }
}