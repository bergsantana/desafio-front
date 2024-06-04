import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import PriceFilter from "../PriceFilter";
import SearchFilter from "../SearchFilter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { PriceFilterContext } from "../../context/PriceFilterContext";
import { CartContext } from "../../context/CartContext";

// interface HeaderProps {
//     searchStr: string
//     hitSearch: Function
//     maxPrice: number
//     minPrice: number
     
// }

export default function Header( ) {

    //const { setMinMax } = useContext(PriceFilterContext)

    const { cart } = useContext(CartContext)

    const navigate = useNavigate()

    //const setPriceContextFunc = (ns: number[]) => props.updatePriceContext(ns)

    return (
        <header className="flex flex-col max-w-full bg-white p-1 h-36 lg:h-56" >
            <div className="text-center font-bold text-lg text-blue-600 font-sans cursor-pointer" 
                onClick={() => navigate('/')}
            > Fake Online Store</div>
            <div className=" lg:hidden flex w-full justify-between  lg:grid-cols-3">
                 <Menu />
            </div>
            <div>
                {/* <div className="hidden lg:flex border-2 border-gray-500 rounded px-2 w-56 overflow-scroll">
                    {
                        cart && cart.map((product) =>(
                            <div className="w-24">
                                <div>
                                    {product.product.title.substring(0, 15)}
                                </div>
                                <div>
                                    <img
                                    className="w-16"
                                    src={product.product.image} /> 
                                </div>
                                <div>{product.qty}</div>
                                
                            </div>

                        ) )
                    }

                </div> */}

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
                    {cart[0].product.title==='' ?  '': cart.length}
                <ShoppingCart />
            </div>
             
        </header>
    )
}