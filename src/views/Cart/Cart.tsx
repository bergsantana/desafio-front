import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { DeleteForever, ShoppingCart } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { defaultCartState } from "../../App"
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage"

export default function Cart() {

    const { cart, setProducts } = useContext(CartContext)
    const [ cartTotal, setCartTotal ] = useState('0')

    const calcCartTotal = () => {
        const i = 0
        const result = cart.reduce(( (acc, curr) => acc + (curr.product.price * curr.qty ) ), i)
        setCartTotal(result.toFixed(2)  ?? '0')
    }   

    const deleteItem = (id: number) => {
        const cpy = Array.from(cart).filter(item => item.product.id !== id)
        setProducts(cpy.length ? cpy : [defaultCartState])
        calcCartTotal( )
        
    }

    useEffect(() => calcCartTotal(),[])

    const navigate = useNavigate()

    return (
        <AnimatedPage>
            <div className="bg-white pb-4 lg:px-72 lg:w-8/12  w-full h-full lg:m-auto ">
                <div className="flex flex-col pr-1 lg:items-center  ">
                    {
                        cart[0].product.id ? (
                        cart.map((item) => (
                            <div className="grid grid-cols-cart-list w-full h-28 lg:w-96">
                                 
                                <img src={item.product.image }  
                                    onClick={() => navigate(`/products/${item.product.id}`)}
                                    className="w-5/6 h-5/6       ml-3 cursor-pointer w "/>
                                 
                                <div className="flex flex-col justify-between text-sm font-bold mr-2">
                                    {item.product.title.substring(0, 32)}
                                    <div className="text-red-500 cursor-pointer" 
                                        onClick={() => deleteItem(item.product.id)}
                                        ><DeleteForever/></div>
                                </div>
                                <div>
                                    <div className="text-green-500 font-extralight text-md">
                                        ${(item.qty * item.product.price).toFixed(2)}
                                    </div>
                                    <div className="text-end font-mono ">{item.qty}</div>    
                                </div>
                                
                            </div>
                        ))) : (
                            <div className="text-3xl font-extrabold text-blue-700 m-auto">
                                Empty shopping cart
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-col border-t-2 border-w mt-4 w-10/12 p-5 m-5 border-b-2 justify-between  ">
                    <div className="font-bold text-3xl text-blue-700 font-mono">Total <ShoppingCart  /> </div>
                    <div>
                        <div className="bg-green-200 text-green-800 w-8/12 h-12 pt-4 font-extrabold text-3xl text-center mt-4 mx-auto lg:w-80 lg:mx-0 lg:flex lg:self-end lg:justify-center ">
                            $ {cartTotal}
                        </div>
                        <div className="bg-green-200 text-green-800 w-8/12 h-12 font- font-bold text-center text-sm mt-0  mx-auto lg:w-80 lg:mx-0 lg:flex lg:self-end lg:justify-center">paying via credit card</div>

                    </div>

                    
                    <button 
                        className="bg-blue-700 h-20 w-52 mx-auto mb-12 mt-2 rounded text-white font-mono font-bold text-2xl"
                        onClick={() => navigate('/checkout')}>
                        Checkout 
                    </button>
                </div>
            </div>
        </AnimatedPage>
    )
}