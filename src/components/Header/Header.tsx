import {  Search, ShoppingCart } from "@mui/icons-material";
import PriceFilter from "../PriceFilter";
import SearchFilter from "../SearchFilter";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { PriceFilterContext } from "../../context/PriceFilterContext";
import { CartContext } from "../../context/CartContext";
 
export default function Header( ) {

    //const { setMinMax } = useContext(PriceFilterContext)

    const { cart } = useContext(CartContext)

    const [ numOnCart, setNumOnCart ] = useState(0)

    const calcCartTotal = () => {
        const i = 0
        const result = cart.reduce(( (acc, curr) => acc + curr.qty  ), i)
        console.log(result)
        setNumOnCart(result  )
    }  

    useEffect( () => calcCartTotal(), [cart])

    const navigate = useNavigate()

    //const setPriceContextFunc = (ns: number[]) => props.updatePriceContext(ns)

    return (
        <header className="flex flex-col max-w-full bg-white p-1 max-h-36  lg:h-56" >
            <div className="text-center font-bold text-lg text-blue-600 font-sans cursor-pointer" 
                onClick={() => navigate('/')}
            > Fake Online Store</div>
            <div>
 

                <div className="flex w-full lg:justify-end " >
                        <div className="flex w-56 mr-1 ">
                            <PriceFilter    />
                        </div>
                        <div className="flex">
                            <SearchFilter    />
                            <Search />
                        </div>
                </div>

            </div>
            <div 
                onClick={ () => navigate('/cart')}
                className="
                flex 
                mx-auto
                mt-2 mb-1
                justify-center
                items-center
                text-blue-700   border-2 border-gray-200 w-12 rounded-3xl h-10
                cursor-pointer
                " >
                    {cart[0].product.title==='' ?  '': numOnCart}
                <ShoppingCart />
            </div>
             
        </header>
    )
}