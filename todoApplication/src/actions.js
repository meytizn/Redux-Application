
export function addToDO(text){
    return{type:"ADD-TO-DO",payload:text}
}



export function removeToDO(id){
    return{type:"REMOVE-TO-DO",payload:id}
}
