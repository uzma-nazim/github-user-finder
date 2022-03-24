import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { CombibineReducer } from "./reducer/combinereducer";


const UserStore = createStore( CombibineReducer ,{ } , applyMiddleware(thunk))

export default UserStore