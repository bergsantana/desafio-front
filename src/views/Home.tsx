import {   useContext, useEffect, useState } from "react"
import api from "../api/api"
import { Product } from "../interfaces/Product"
import ItemCard from "../components/ItemCard"
import AnimatedPage from "../components/AnimatedPage/AnimatedPage"
//import { CartContext } from "../context/CartContext"
import { PriceFilterContext } from "../context/PriceFilterContext"
import { SearchFilterContext } from "../context/SearchFilterContext"
 
export default function Home() {
    const [data, setData] = useState<Product[]>()


    const {  minMax } = useContext(PriceFilterContext)
    const {  searchStr } = useContext(SearchFilterContext)
 
    const getItems = async () => { 
        try {
            const res : Product[] = await api.useAPI().getAllProducts()
            if(res){
                const filtered = res.filter( (item) => item.title.toLowerCase().includes(searchStr.searchStr) && item.price >= minMax.minMax[0] && item.price <= minMax.minMax[1])
 
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
            <div className="p-1 px-1 min-h-fit">
                
                <div className="flex gap-2 flex-wrap lg:px-10 h-fit bg-gray-100 lg:p-2 justify-center">
                    {data && data.map((item) => (
                            <ItemCard {...item} key={item.id} />
                    ))
    
                }
                </div>
 
            </div>
        </AnimatedPage>
 
    )
}