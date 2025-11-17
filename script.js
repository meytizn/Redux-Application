const store = {

    state: {
        cart:[] , shop:[]
    } ,


    getState (){
        return this.state
    } ,


    dispatch (action){

        if(action.type=="ADD-TO-CARD"){
             this.state.cart.push(action.payload)
        } 

    } ,


}


store.dispatch(  {type:"ADD-TO-CARD",payload :"samsung"}  )

console.log(store.getState())