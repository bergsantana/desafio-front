import { createContext } from "react";
 
interface PriceFilterContextProps {
    searchStr: {searchStr: string}
    setSearchStr: React.Dispatch<React.SetStateAction<{searchStr: string}>>
}

export const SearchFilterContext = createContext<PriceFilterContextProps>( 
    {
        searchStr:{searchStr: ''},
        setSearchStr: ( ) => {}
    }
)
 