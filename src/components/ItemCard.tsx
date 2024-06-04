import { Rating } from "@mui/material";
import { Product } from "../interfaces/Product";
import { PlusOne, RateReviewOutlined, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ItemCard(props: Product) {

    const {cart, setProducts } = useContext(CartContext)

    const navigate = useNavigate()

    const goToProductPage = () => navigate(`/products/${props.id}`)
    
    const addToCart = ( ) => {
        const item = props
        if(item){
            const cartCopy = cart[0].product.title !== '' ? Array.from(cart) : []
            const matched = cartCopy.find((CpyItem) => CpyItem.product.id === item.id)
            if(matched){
                matched.qty++
                setProducts(cartCopy)
            }else {
                cartCopy.push({product: item, qty: 1})
                setProducts(cartCopy)
            }

        }
    }


 

    return (
        <div className="px-1 py-1 flex flex-col bg-white text-blue-500 font-bold rounded-lg h-72 w-44  justify-between">
            <div className="ml-4 mb-2 text-sm font-bold ">{props.title.substring(0, 25)}</div>
            <div className="h-fit bg-white rounded-lg">
                <img 
                    onClick={goToProductPage}
                    src={props.image} 
                    className=" cursor-pointer m-auto object-scale-down h-36 rounded-lg"/>
            </div>
            <div className="mt-6 mb-2 flex  justify-end  gap-2 text-xs h-4">
                <button
                    onClick={() => addToCart()}
                    ><PlusOne  fontSize={"small"}/><ShoppingCart fontSize="small" /> </button>
                <div className="font-bold text-green-600 text-end pr-4">${props.price}</div>
            </div>
            <div className="flex gap-4 text-sm font-mono items-end">
                <div className="text-sm text-black font-thin"><RateReviewOutlined fontSize="small" />{props.rating.count}
                     
                </div>
                <div className="text-sm text-black font-thin"><Rating size="small" defaultValue={props.rating.rate} disabled={false}  readOnly={true} /></div>
            </div>
        </div>
    )
}