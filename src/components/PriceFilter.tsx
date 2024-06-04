import { Slider } from "@mui/material";
import { useContext, useState } from "react";
import { PriceFilterContext } from "../context/PriceFilterContext";

export default function PriceFilter( ) {
    const [value, setValue] = useState<number[]>([1, 1000]);

    const { minMax,setMinMax } = useContext(PriceFilterContext)

    function valuetext(value: number){
        return `${value}`
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        event.preventDefault()
        console.log('min max local', newValue)
        const newVal = [value[0], value[1]]
        console.log(newVal)
        setMinMax({minMax: newVal})
        console.log('min max context', minMax)
        //props.updateFilterContext(newVal)
        setValue(newValue as number[]);
      };
    return (
        <div className="w-48 flex gap-4 text-sm items-center text-green-700">
            <div>${minMax.minMax[0]}</div>
           <Slider
                className="w-1"
                getAriaLabel={() => 'Temperature range'}
                value={value}
                marks
                onChange={handleChange}
                 
                getAriaValueText={valuetext}
                step={50}
                min={-50}
                max={1050}
            />
            <div>${minMax.minMax[1]}</div>
        </div>
    )
}