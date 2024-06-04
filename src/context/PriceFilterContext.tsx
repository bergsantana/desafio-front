import { createContext } from "react";

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
 