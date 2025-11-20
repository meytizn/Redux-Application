const store = {

    state: {
        cart: [],
        shop: []
    },


    getState() {
        return this.state;
    },


    dispatch(action) {
        this.state = reducer(this.state, action);
    },

}


function reducer(state, action) {
    switch (action.type) {
        case "ADD-TO-CART": 
            return { ...state, cart: [...state.cart, action.payload] };

        case "REMOVE-FROM-CART": 
            return {...state,cart:[...state.cart.slice(0,0)]};

        default:
            return state; 
    }
}




// Actions 

function addToCart(product) { 
    return { type: "ADD-TO-CART", payload: product };
}

function removeFromCart(product) { 
    return { type: "REMOVE-FROM-CART", payload: product };
}



// Calling actions

store.dispatch(addToCart("apple"));
console.log(store.getState());

store.dispatch(removeFromCart("xiaomi"));
console.log(store.getState());
