// npm install uuid is used
import { v4 as uuidv4 } from "uuid"

let initialState ={

   //if there is a array obj stringify [{"id":"1","text":"mehdi"}, ...] in local storage convert to
    //  array obj readable format [{id:1,text:"mehdi"}, ... ]  or return an empty
 
    todos:JSON.parse(localStorage.getItem("todos"))||[]
    
}



export default function todoReducer(state=initialState , action){
    switch (action.type) {

        case "ADD-TO-DO":{

            // first we create a list to update todos array by sp coppying then adding new obj creating op
            const updatedTodos2 = [...state.todos, { id: uuidv4(), text: action.payload }] ;

            //updatedtodos2 is this [{id:1 ,text:"gym"}] it is a array obj
            // then we give it this array obj to local storage that gets stringify
            localStorage.setItem("todos",JSON.stringify(updatedTodos2)) ;

            //now we update state
            return {...state , todos:updatedTodos2}

            }



        case "REMOVE-TO-DO": {

            //first we create array by using filter to give objects
            const updatedTodos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });

            //we made updatedTodoes[{} , {},..] by filter now we have store that in local storage first
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            
            //then we update state spreadoperatory and pass the array new array updatetodoes [{} , {},..]
            return { ...state, todos: updatedTodos };
        }
    

        default:
            return state
    }
}





// without local storage 

// export default function todoReducer(state=initialState , action){
//     switch (action.type) {

//         case "ADD-TO-DO":
//             return{...state , todos:[...state.todos,{id:uuidv4() ,text:action.payload}]}
            

//         case "REMOVE-TO-DO":
//             return{...state , todos:state.todos.filter(
//                 (todo)=>{
//                     if(todo.id!=action.payload){return todo}
//                 }
//             )     }
    
//         default:
//             return state
//     }
// }