import axios from "axios"

const inventoriesApi = () => {

    const api = axios.create({
        baseURL: process.env.GATSBY_API_URL ?? "https://aquinoes.com"
    })


    const getAll = (page?: number, limit?: number) => {
        page = page ?? 0
        limit = limit ?? 10

        return api.get(`/inventories?page=${page}&limit=${limit}`)
    }

    const getOne = (inventoryId: string) => {
        return api.get(`/inventories/${inventoryId}`)
    }

    return { getAll, getOne }
}

export default inventoriesApi