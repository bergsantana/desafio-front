import axios from "axios"

const API_HOST = import.meta.env.VITE_API_HOST

const api = axios.create({baseURL: API_HOST})

function useAPI(){
    const getAllProducts = async () => {
        const req = await api.get('/products')
        return req.data
    }

    const getOneProduct = async (id: number) => {
        const req = await api.get(`/products/${id}`)
        return req.data
    }

    return { getAllProducts, getOneProduct}
}

export default {api, useAPI}