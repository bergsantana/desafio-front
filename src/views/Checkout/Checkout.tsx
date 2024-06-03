import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage"

export default function Checkout() {

    const { cart, setProducts } = useContext(CartContext)

    const [ cartTotal, setCartTotal ] = useState(0)
 

    const calcCartTotal = () => {
        const i = 0
        const result = cart.reduce(( (acc, curr) => acc + (curr.product.price * curr.qty ) ), i)
        setCartTotal(result ?? 0)
    }   

    useEffect(() => calcCartTotal(),[])

    return (
        <AnimatedPage>
            <div>
                <div>
                    <div>Total of products</div>
                    <div>Payment by Credit Card:</div>
                    <div>{cartTotal.toFixed(2)}</div>
                </div>
                <div>Payment Method</div>
                <div>
                    <div>Credit Card</div>
                    <form>
                        <input placeholder="Credit card number" type="number"/>
                        <input placeholder="Name on the card" type="text"/>
                        <div>
                            <input placeholder="Expiration date" type="date"/>
                            <input placeholder="Verification number" type="number"/>
                            <input placeholder="ID number" type="text" />
                            <input placeholder="Birthdate" type='date' />
                        </div>
                        <button type="submit">Confirm</button>

                    </form>
                </div>

            </div>
        </AnimatedPage>
    )
}