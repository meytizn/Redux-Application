import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import logger from "redux-logger";


const rootStore = combineReducers({
    users:userReducer ,
    products:productReducer
})


const store = createStore(rootStore,applyMiddleware(logger)) ;

export default store 