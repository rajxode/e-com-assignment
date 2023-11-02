// for creating store
import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../Reducers/productReducer";

// creating store from reducers
export const store = configureStore({
    reducer:{
        productReducer
    }
})