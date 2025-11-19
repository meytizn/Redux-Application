const store = {

    state: {
        cart:[] , shop:[]
    } ,


    getState (){
        return this.state
    } ,


    dispatch (action){

        if(action.type=="ADD-TO-CARD"){
             this.state.cart.push(action.payload)  // action.payload referrs to an object
        } 

        else if (action.type=="REMOVE-FROM-CARD"){
            this.state.cart.pop(action.payload)
        }



    } ,


}


// store.dispatch(  {type:"ADD-TO-CARD",payload :"apple"}  )
// store.dispatch(  {type:"REMOVE-FROM-CARD",payload :"samsung"}  )
// console.log(store.getState())





// session 6 => converting actions to function 

// function addToCard(product){
//     return  {type:"ADD-TO-CARD",payload :product} 
// }

// function removeFromCard(product){
//     return {type:"REMOVE-FROM-CARD",payload:product}
// }


// store.dispatch(  addToCard("apple") )
// store.dispatch(removeFromCard("apple"))

// console.log(store.getState())



// spread op for solving being refrencebel in Array and object 
// not to change main refrence ( Array or Obj )

const name = ["ali","amir","mehdi"]
const copyName=[...name,"mamad"]//copyignsolution also can add new data in array
console.log(copyName)
console.log(name)


const user ={ name:"mehdi" , lastname:"zamani" , age:18 }
const copyUser = {...user}  //copyign solution
copyUser.name = "ali"
console.log(copyUser)
console.log(user) 