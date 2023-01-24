import { createSlice } from "@reduxjs/toolkit"

interface ProductsInCarState {
    productsInCar: {
        productsList: Product[]
    }
}

export const productsInCarSlice = createSlice({
    name: "productsInCar",
    initialState: {
        productsList: []
    },
    reducers: {
        addProduct: (state: any, action) => {
            const isProductInCar = state.productsList.find((product: Product) => product.id === action.payload.id ? true : false)
            if (!isProductInCar) {
                state.productsList = [...state.productsList, action.payload]
            }
        },
        deleteProduct: (state, action) => {
            const newCar = state.productsList.filter((product: Product) => product.id !== action.payload.id)
            state.productsList = newCar
        }
    }
})

export const { addProduct, deleteProduct } = productsInCarSlice.actions

export const selectProductsInCar = (state: ProductsInCarState) => state.productsInCar.productsList

export default productsInCarSlice.reducer