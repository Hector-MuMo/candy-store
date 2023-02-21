import axios from "axios"


const productsApi = () => {

    const api = axios.create({
        baseURL: process.env.GATSBY_API_URL ?? "https://aqui.com"
    })


    const getAll = (page?: number, limit?: number) => {
        page = page ?? 0
        limit = limit ?? 10

        return api.get(`/products?page=${page}&limit=${limit}`)
    }

    const getOne = (productId: string) => {
        return api.get(`/products/${productId}`)
    }

    return { getAll, getOne }
}

export default productsApi