import {   useContext, useEffect, useState } from "react"
import api from "../api/api"
import { Product } from "../interfaces/Product"
import ItemCard from "../components/ItemCard"
import { useNavigate } from "react-router-dom"
import AnimatedPage from "../components/AnimatedPage/AnimatedPage"
import { CartContext } from "../context/CartContext"
import { PriceFilterContext } from "../context/PriceFilterContext"
import { SearchFilterContext } from "../context/SearchFilterContext"
 
export default function Home() {
    const [data, setData] = useState<Product[]>()


    const {  minMax } = useContext(PriceFilterContext)
    const {  searchStr } = useContext(SearchFilterContext)


    const navigate = useNavigate()

    const goToItemDescription = (id: number) => {
     navigate(`products/${id}`)
 
    }

    const getItems = async () => { 
        try {
            const res : Product[] = await api.useAPI().getAllProducts()
            if(res){
                const filtered = res.filter( (item) => item.title.toLowerCase().includes(searchStr.searchStr) && item.price >= minMax.minMax[0] && item.price <= minMax.minMax[1])
                // console.log('minMax', minMax)
                // console.log('searSt', searchStr)
                // console.log('res', res)
                // console.log('filtered', filtered)
                setData(filtered)
            }
            //setData(res)
        }catch(error) {
            console.log('Error fetching products', error)
        }
    }

    useEffect(() => {
        getItems()
    }, [minMax.minMax, searchStr.searchStr])

    return (
        <AnimatedPage>
            <div className="p-1 px-2 min-h-fit">
                
                <div className="flex gap-2 flex-wrap lg:px-10 h-fit bg-gray-200 lg:p-2">
                    {data && data.map((item) => (
                        <button onClick={() =>  goToItemDescription(item.id)}>
                            <ItemCard {...item} key={item.id} />
                        </button>
                    ))
    
                }
                </div>
 
            </div>
        </AnimatedPage>
 
    )
}