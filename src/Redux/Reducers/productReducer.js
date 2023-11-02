
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = { products:[] , singleProduct:{} , isLoading:false , currentPage : 0 };

export const getInitialProductThunk = createAsyncThunk(
    'product/getProduct',
    async() => {
        try{
            const response = await axios.get('https://dummyjson.com/products?limit=12');
            return response.data.products;
        }
        catch(err){
            console.log(err);
        }
    }
)

export const getPageProductThunk = createAsyncThunk(
    'product/getProductForPage',
    async(args,thunkAPI) => {
        try {
            const { productReducer } = thunkAPI.getState();
            const { currentPage } = productReducer;
            const response = await axios.get(`https://dummyjson.com/products?limit=12&skip=${currentPage*12}`);
            return response.data.products;
        } catch (err) {
            console.log(err);
        }
    }
)

const productSlice = createSlice({
        name:'products',
        initialState,
        reducers:{
            setSingleProduct:(state,action) => {
                state.singleProduct = action.payload;
                return;
            },
            setCurrentPage:(state,action) => {
                if( state.currentPage === 0 && action.payload < 0 ){
                    return;
                }
                else{
                    state.currentPage += action.payload;
                    return;
                }
            }
        },
        extraReducers:(builder) => {
            builder
            .addCase(getInitialProductThunk.pending , (state,action) => {
                state.isLoading = true;
            })
            .addCase(getInitialProductThunk.fulfilled , (state,action) => {
                state.isLoading = false;
                state.products = [...action.payload];
            })
            .addCase(getPageProductThunk.pending , (state,action) => {
                state.isLoading = true;
            })
            .addCase(getPageProductThunk.fulfilled , (state,action) => {
                state.isLoading = false;
                state.products = [...action.payload];
            })
        }
    }
)

export const productReducer = productSlice.reducer;

export const { setSingleProduct , setCurrentPage } = productSlice.actions;

export const productSelector = (state) => state.productReducer;