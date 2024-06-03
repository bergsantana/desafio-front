import { Slider } from "@mui/material";


interface PriceFilterProps {
    max: number,
    min: number
}

export default function PriceFilter(props: PriceFilterProps) {
    

    const marks = [{
        value: 1,
        label: '1'
    }, {
        value: 1000,
        label: '1000'
    }]

    function valueText(value: number){
        return `${value}`
    }
    return (
        <div>
           
            <Slider marks={marks} step={20} defaultValue={999} aria-label="Pricing filter" getAriaLabel={valueText} />        
        </div>
    )
}