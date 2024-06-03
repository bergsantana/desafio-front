import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Product from "../views/Product/Product";
import Cart from "../views/Cart/Cart";
import Checkout from "../views/Checkout/Checkout";


const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'products/:id',
                element: <Product />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkout',
                element: <Checkout />
            }
        ]
    }
])


export default router