import { configureStore } from "@reduxjs/toolkit";
import productAmountReducer from "./productsAmount/productsAmountSlice"
import productReducer from "./product/productSlice"
import productsInCarReducer from "../app/productsInCar/productsInCarSlice"
import userInfo from "../app/userInfo/userInfoSlice"


const createStore = () => configureStore({
    reducer: {
        productsAmount: productAmountReducer,
        product: productReducer,
        productsInCar: productsInCarReducer,
        user: userInfo
    }
})

type ConfiguredStore = ReturnType<typeof createStore>
type StoreGetState = ConfiguredStore["getState"]
export type RootState = ReturnType<StoreGetState>
export type AppDispatch = ConfiguredStore["dispatch"]

export default createStore
