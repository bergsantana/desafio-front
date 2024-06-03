import { KeyboardEventHandler, ReactEventHandler, useContext, useState } from "react"
import { SearchFilterContext } from "../context/SearchFilterContext"

 interface SearchFilter {
    text: string,
    hitSearch: Function
}

export default function SearchFilter(props: SearchFilter) {
    const [searchStr, updateSearchStr] = useState('')

    const { setSearchStr } = useContext(SearchFilterContext)

    function handleChange(str : string  ) {
        updateSearchStr(str)
        setSearchStr({searchStr : searchStr})
    }

    return (
        <div className="w-full lg:w-96 ">
            <input
                 
                className="bg-gray-200 rounded w-full pl-1 " 
                type="text" value={searchStr}  
                onChange={evt => {handleChange( evt.target.value ) } } 
                placeholder="Search a item"
            />   
        </div>
    )
}