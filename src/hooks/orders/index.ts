import axios from "axios"


const ordersApi = () => {

    const api = axios.create({
        baseURL: process.env.GATSBY_API_URL ?? "https://aquinoes.com"
    })


    const getAll = (page?: number, limit?: number) => {
        page = page ?? 0
        limit = limit ?? 10

        return api.get(`/orders?page=${page}&limit=${limit}`)
    }

    const getOne = (productId: string) => {
        return api.get(`/orders/${productId}`)
    }

    const create = (order: Order) => {
        return api.post("/orders", order)
    }

    const update = (orderId: string, updateOrder: any) => {
        return api.put(`/order/${orderId}`, updateOrder)
    }

    const remove = (orderId: string) => {
        return api.delete(`/order/${orderId}`)
    }

    return { getAll, getOne, create, update, remove }
}

export default ordersApi