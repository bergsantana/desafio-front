import { MouseEventHandler, useEffect, useState } from "react"
import api from "../api/api"
import { Product } from "../interfaces/Product"
import ItemCard from "../components/ItemCard"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const [data, setData] = useState<Product[]>()


    const navigate = useNavigate()

    const goToItemDescription = (id: number) => {
     navigate(`products/${id}`)
 
    }

    const getItems = async () => { 
        try {
            const res = await api.useAPI().getAllProducts()
            console.log(res)
            setData(res)
        }catch(error) {
            console.log('Error fetching products', error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="p-2">
            <p>Home</p>
            <div className="flex gap-2 flex-wrap lg:px-10">
                {data && data.map((item) => (
                    <button onClick={() =>  goToItemDescription(item.id)}>
                        <ItemCard {...item} key={item.id} />
                    </button>
                ))
 
            }
            </div>
                 
        </div>
    )
}