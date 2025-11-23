

export default function userReducer(state=[],action){

    switch (action.type) {

        case "ADDUSER":{
            return [...state,action.payload]
        }
    
        default:
            return state
    }


}