

export default function productReducer(state=[],action){

    switch (action.type) {
        
        case "ADDPRODUCT":{
            return [...state,action.payload]
        }
    
        default:
           return state
    }


}