import { createContext } from "react";
import { Product } from "../interfaces/Product";

interface PriceFilterContextProps {
    minMax: {minMax:number[]}
    setMinMax: React.Dispatch<React.SetStateAction<{minMax: number[]}>>
}

export const PriceFilterContext = createContext<PriceFilterContextProps>( 
    {
        minMax:{minMax: []},
        setMinMax: ( ) => {}
    }
)
 