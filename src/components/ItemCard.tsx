import { Rating } from "@mui/material";
import { Product } from "../interfaces/Product";
import { RateReviewOutlined } from "@mui/icons-material";

export default function ItemCard(props: Product) {
    return (
        <div className="px-1 py-1 flex flex-col bg-white text-blue-500 font-bold rounded-lg h-72 w-44  justify-between">
            <div className="ml-4 mb-2 text-sm font-bold ">{props.title.substring(0, 25)}</div>
            <div className="h-fit bg-white rounded-lg">
                <img src={props.image} className="m-auto object-scale-down h-36 rounded-lg"/>
            </div>
            <div className="mt-6 mb-2 flex flex-col gap-2 text-xs">
                 
                <div className="font-bold text-green-600 text-end pr-4">${props.price}</div>
            </div>
            <div className="flex gap-4 text-sm font-mono items-end">
                <div className="text-sm text-black font-thin"><RateReviewOutlined />{props.rating.count}
                     
                </div>
                <div className="text-sm text-black font-thin"><Rating defaultValue={props.rating.rate} disabled={false}  readOnly={true} /></div>
            </div>
        </div>
    )
}