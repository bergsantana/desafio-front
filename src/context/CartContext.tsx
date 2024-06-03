import { createContext } from "react";
import { Product } from "../interfaces/Product";

interface CartContextProps {
    cart: {product: Product, qty: number}[]
    setProducts: React.Dispatch<React.SetStateAction<{product: Product, qty: number}[]>>
}

export const CartContext = createContext<CartContextProps>( 
    {
        cart: [],
        setProducts: () => {}
    }
)
 