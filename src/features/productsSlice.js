import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getDummyData = createAsyncThunk(
    'products/getAllProducts', 
    async () => {
        const response = await axios.get('https://dummyjson.com/products')
        return response.data
    }
)

const initialState = {
    productsItem: [],
    isLoaded: null
}

const productsSlice = createSlice({
    name: 'products', 
    initialState,
    reducers: {},
    extraReducers: {
        [getDummyData.fulfilled]: (state, action) => {
            state.productsItem = action.payload.products
            state.isLoaded = true
        },
        [getDummyData.pending]: (state) => {
            state.isLoaded = false
        },
        [getDummyData.rejected]: (state) => {
            state.isLoaded = false
        }
    }
})

export default productsSlice.reducer