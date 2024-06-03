import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import PriceFilter from "../PriceFilter";
import SearchFilter from "../SearchFilter";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    searchStr: string
    hitSearch: Function
    maxPrice: number
    minPrice: number
}

export default function Header(props: HeaderProps) {

    const navigate = useNavigate()

    return (
        <header className="flex flex-col max-w-full bg-white p-1" >
            <div className="text-center font-bold text-lg text-blue-600 font-sans cursor-pointer" 
                onClick={() => navigate('/')}
            > Fake Online Store</div>
            <div className="flex w-full justify-between lg:grid lg:grid-cols-3">
                <Menu />
                <div className="">Max Price</div>
                <div className="mx-2 w-5/12 items-center lg:w-28 ">
                    <PriceFilter min={props.minPrice} max={props.maxPrice}   />
            
                </div>
 
            </div>
            <div className="flex w-full pl-2 " >
                    <SearchFilter  hitSearch={props.hitSearch} text=""/>
                    <Search />
                     
                </div>
            <div 
                onClick={ () => navigate('/cart')}
                className="
                flex 
                mx-auto
                my-4
                justify-center
                items-center
                text-blue-700   border-2 border-gray-200 w-12 rounded-3xl h-10  " >
                <ShoppingCart />
            </div>

        </header>
    )
}