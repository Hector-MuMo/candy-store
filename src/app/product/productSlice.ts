import { createSlice } from "@reduxjs/toolkit"

interface ProductState {
    product: {
        id: string
        amount: number
    }
}

export const productSlice = createSlice({
    name: "product",
    initialState: {
        id: "",
        amount: 1
    },
    reducers: {
        getId: (state, action) => {
            state.id = action.payload
        },
        updateAmount: (state, action) => {
            state.amount = action.payload
        }
    }
})

export const { getId, updateAmount } = productSlice.actions

export const selectProductId = (state: ProductState) => state.product.id
export const selectProductAmount = (state: ProductState) => state.product.amount

export default productSlice.reducer