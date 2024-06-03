import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Product from "../views/Product/Product";


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
            }
        ]
    }
])


export default router