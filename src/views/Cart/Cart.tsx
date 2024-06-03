import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { DeleteForever } from "@mui/icons-material"

export default function Cart() {

    const { cart, setProducts } = useContext(CartContext)


    return (
        <div>
            <div>
                {
                    cart.length &&
                    cart.map((item) => (
                        <div>
                            <div>
                                <img src={item.product.image } />
                            </div>
                            <div>
                                {item.product.title}
                                <div><DeleteForever/></div>
                            </div>
                            <div>
                                $ {(item.qty * item.product.price).toFixed(2)}
                            </div>
                            
                        </div>
                    ))
                }
            </div>
            <div>
                <button>
                    Checkout 
                </button>
            </div>
        </div>
    )
}