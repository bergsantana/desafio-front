import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../api/api"
import { Product } from "../../interfaces/Product"
import { Description, RateReviewOutlined } from "@mui/icons-material"
import { Rating } from "@mui/material"
import { CartContext } from "../../context/CartContext"
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage"

export default function ProductItem() {
    let { id } = useParams()
    const [item, setItem ] = useState<Product>()

    const getProducData = async () => {
        try{
            const req = await api.useAPI().getOneProduct(Number(id) ?? '0')
            setItem(req)
        }catch(error){
            console.log('error while loading product data', error)
        }
        
     
    }
    const navigate = useNavigate()

    const { cart,  setProducts } = useContext(CartContext)


    const addToCart = () => {
        if(item){
            const cartCopy = cart[0].product.title !== '' ? Array.from(cart) : []
            const matched = cartCopy.find((CpyItem) => CpyItem.product.id === item.id)
            if(matched){
                matched.qty++
                //console.log('matched and copy', cartCopy)
                setProducts(cartCopy)
            }else {
                cartCopy.push({product: item, qty: 1})
                //console.log('no match, push new item', cartCopy)
                setProducts(cartCopy)
            }

             
            setTimeout(() => navigate('/cart'), 500)
           

           // cartCopy.push(item)
            //console.log('Setting new cart', cartCopy)
            //setProducts(cartCopy)
            //console.log('New cart', cart)
            
        }
    }

    useEffect(() => {
        getProducData()
    }, [])


    return (
        <AnimatedPage>

            <div className="  rounded  pt-2 pb-3 px-2 lg:w-5/6 lg:mx-auto  lg:mt-1 bg-white"  >
                <div
                    className="text-xl font-bold my-4 text-blue-600 lg:pl-5"
                >{item?.title}</div>
                <div className="grid grid-cols-2 lg:justify-center">
                    <div className="lg:flex lg:justify-center px-2 lg:h-full bg-white content-center rounded-lg mx-1">
                        <img src={item?.image} className="rounded-lg  lg:h-96"/>
                    </div>
                    <div className="lg:w-2/4 lg:border-solid lg:border-2 lg:border-gray-300 lg:rounded-xl lg:px-4 lg:ml-4 lg:bg-white lg:grid lg:justify-self-center">
                        <div className="pt-2 pl-2 text-sm text-gray-700">For only </div>
                        <div className="text-green-600 text-3xl  lg:text-8xl text-center pt-1 pb-0 mt-2 font-bold font-sans  ">
                            $ {item?.price.toFixed(2)}
                        </div>
                        <div className="lg:border-b-2 lg:border-gray-300">
                            <div className="text-end px-4 text-sm text-blue-600 animate-bounce">15% OFF</div>
                            <div className="text-sm text-center font-mono">or in 10 x $ {((item?.price ?? 0 * 1.19 ) / 10 ).toFixed(2) }</div>
                        </div>
    
                        <div className="pt-3"
                        >
                            <div className="font-mono text-gray-600">Shipping</div>
                            <input className="h-8 lg:bg-gray-200 bg-white rounded-lg text-gray-500 pl-3 mb-" value={'Not needed'} disabled/>
                        </div>
                        <div className="flex gap-4 text-sm font-mono items-end">
                            <div className="text-sm text-black font-thin"><RateReviewOutlined/>{item?.rating.count}
                            </div>
                            <div className="text-sm text-black font-thin"><Rating defaultValue={item?.rating.rate ?? 5} disabled={false} readOnly /></div>
                            </div>
                    </div>
                    
                </div>
                <div className="flex  lg:mt-12">
                            <button 
                                onClick={() => { item ? addToCart() : ''}}
                                className="
                                        lg:w-6/12 lg:m-auto
                                        bg-blue-500 w-full mt-7 h-12 text-2xl font-bold font-mono text-white rounded hover:bg-blue-900 duration-200">
                                Add to cart
                            </button>
                </div>
                <div className="lg:w-7/12 lg:pb-5">
                        <div className="my-4 text-blue-700 text-3xl font-bold"><Description/> Description</div>
                        <div className="px-2 text-sm text-gray-900 font-sans">{item?.description}</div>
                </div>
            </div>
        </AnimatedPage>
    )
}