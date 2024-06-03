import { Menu, Search } from "@mui/icons-material";
import PriceFilter from "../PriceFilter";
import SearchFilter from "../SearchFilter";
import { useState } from "react";
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
                <div className="mx-2 w-5/12 items-center lg:w-28 ">
                    <PriceFilter min={props.minPrice} max={props.maxPrice}   />

                </div>
                <div className="flex w-full pl-2 " >
                    <SearchFilter  hitSearch={props.hitSearch} text=""/>
                    <Search />
                </div>
            </div>
        </header>
    )
}