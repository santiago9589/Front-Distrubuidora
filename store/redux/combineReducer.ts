import { combineReducers } from 'redux';
import productReducer from "./sliceProducts"
import cartReducer from './sliceCart';
import contactReducer from "./sliceContact"

const appReducer = combineReducers({
   productReducer,
   cartReducer,
   contactReducer
})


export default appReducer