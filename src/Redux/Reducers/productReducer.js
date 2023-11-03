
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = { products:[] , singleProduct:{} , isLoading:false , currentPage : 0 , category:[] , selectedCategory:'' };

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

export const getSearchProductThunk = createAsyncThunk(
    'product/getSearchProduct',
    async({name},thunkAPI) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${name}`);
            return response.data.products;
        } catch (err) {
            console.log(err);
        }
    }
);


export const getAllCategoryThunk = createAsyncThunk(
    'product/getAllCategory',
    async() => {
        try {
            const response = await axios.get('https://dummyjson.com/products/categories');
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
)

export const getProductByCategoryThunk = createAsyncThunk(
    'product/getProductByCategory',
    async({cat},thunkAPI) => {
        try {
            thunkAPI.dispatch(setSelectedCategory(cat));
            const response = await axios.get(`https://dummyjson.com/products/category/${cat}`);
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
            },
            setSelectedCategory:(state,action) => {
                state.selectedCategory = action.payload;
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
            .addCase(getSearchProductThunk.pending,(state,action) => {
                state.isLoading = true;
            })
            .addCase(getSearchProductThunk.fulfilled,(state,action) => {
                state.isLoading = false;
                state.products = [...action.payload];
            })
            .addCase(getAllCategoryThunk.fulfilled,(state,action) => {
                state.category = [...action.payload];
            })
            .addCase(getProductByCategoryThunk.pending,(state,action) => {
                state.isLoading = true;
            })
            .addCase(getProductByCategoryThunk.fulfilled,(state,action) => {
                state.isLoading = false;
                state.products = [...action.payload];
            })
        }
    }
)

export const productReducer = productSlice.reducer;

export const { setSingleProduct , setCurrentPage , setSelectedCategory} = productSlice.actions;

export const productSelector = (state) => state.productReducer;