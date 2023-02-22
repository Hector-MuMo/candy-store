import { createSlice } from "@reduxjs/toolkit"

interface ProductsInCarSelector {
    productsInCar: {
        productsList: Product[]
    }
}

interface ProductsInCarReducer {
    productsList: Product[]
}

export const productsInCarSlice = createSlice({
    name: "productsInCar",
    initialState: {
        productsList: []
    },
    reducers: {
        getLocalStorageCar: (state, action) => {
            state.productsList = action.payload
        },
        addProduct: (state: ProductsInCarReducer, action) => {
            const isProductInCar = state.productsList.find((product: Product) => product.id === action.payload.id ? true : false)
            if (!isProductInCar) {
                state.productsList = [...state.productsList, action.payload]
            }
        },
        deleteProduct: (state: ProductsInCarReducer, action) => {
            const newCar = state.productsList.filter((product: Product) => product.id !== action.payload.id)
            state.productsList = newCar
        },
        updateBuyingAmount: (state: ProductsInCarReducer, action) => {
            const updatedCar: Product[] = state.productsList.map((product: Product) => {
                if (product.id === action.payload.id) {
                    const updatedProduct = { ...product, buyingAmount: action.payload.amount }
                    return updatedProduct
                } else {
                    return product
                }
            })

            state.productsList = updatedCar
        }
    }
})

export const { getLocalStorageCar, addProduct, deleteProduct, updateBuyingAmount } = productsInCarSlice.actions

export const selectProductsInCar = (state: ProductsInCarSelector) => state.productsInCar.productsList

export default productsInCarSlice.reducer