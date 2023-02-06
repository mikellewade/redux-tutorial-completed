import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    total: 0,
    amount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            state.cartItems.push(payload)
        },
        removeCart: (state, {payload }) => {
            const filteredCart = state.cartItems.filter(item => item.id !== payload )
            state.cartItems = filteredCart
        },
        calcTotal: (state) => {
            let newTotal = 0
            state.cartItems.forEach((item) => {
                newTotal +=  item.price
            })
            state.total = newTotal
        },
        amountTotal: (state) => {
            state.amount = state.cartItems.length
        }
    }
})

export const { addCart, removeCart, calcTotal, amountTotal } = cartSlice.actions

export default cartSlice.reducer