import { Slider } from "@mui/material";
import { useContext, useState } from "react";
import { PriceFilterContext } from "../context/PriceFilterContext";


interface PriceFilterProps {
    max: number,
    min: number,
    //updateFilterContext: Function
}

export default function PriceFilter(props: PriceFilterProps) {
    const [value, setValue] = useState<number[]>([1, 1000]);

    const { minMax,setMinMax } = useContext(PriceFilterContext)

    function valuetext(value: number){
        return `${value}`
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        // console.log('min max', newValue)
        const newVal = [value[0], value[1]]
        console.log(newVal)
        setMinMax({minMax: newVal})
         console.log('min max context', minMax)
        //props.updateFilterContext(newVal)
      };
    return (
        <div>
           <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                marks
                onChange={handleChange}
                 
                getAriaValueText={valuetext}
                step={25}
                min={0}
                max={1000}
            />
        </div>
    )
}