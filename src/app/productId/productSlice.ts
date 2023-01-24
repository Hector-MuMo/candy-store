import { createSlice } from "@reduxjs/toolkit"

interface ProductState {
    product: {
        id: string
    }
}

export const productSlice = createSlice({
    name: "product",
    initialState: {
        id: ""
    },
    reducers: {
        getId: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { getId } = productSlice.actions

export const selectProductId = (state: ProductState) => state.product.id

export default productSlice.reducer