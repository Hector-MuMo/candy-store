import axios from "axios"


const ordersApi = () => {

    const api = axios.create({
        baseURL: process.env.GATSBY_API_URL ?? "https://aqui.com"
    })


    const getAll = (page?: number, limit?: number) => {
        page = page ?? 0
        limit = limit ?? 10

        return api.get(`/orders?page=${page}&limit=${limit}`)
    }

    const getOne = (productId: string) => {
        return api.get(`/orders/${productId}`)
    }

    return { getAll, getOne }
}

export default ordersApi