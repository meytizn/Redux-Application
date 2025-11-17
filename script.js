const store = {

    state: {
        cart:[] , shop:[]
    } ,



    getState (){
        return this.state
    } ,


    dispatch (action){
        return this.state.cart.push(action)
    }

}


store.dispatch("apple")
console.log(store.getState())