import { Slider } from "@mui/material";


interface PriceFilterProps {
    max: number,
    min: number
}

export default function PriceFilter(props: PriceFilterProps) {
    return (
        <div>
           
        <Slider  />        
        </div>
    )
}