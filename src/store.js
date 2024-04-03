import { combineReducers, configureStore} from "@reduxjs/toolkit"
import { cartReducer } from "./storedata"
import {productReducer} from "./productslice"

 const  store=configureStore({

reducer:{product:productReducer,cart:cartReducer},
        

})
export default store   