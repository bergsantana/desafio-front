 interface SearchFilter {
    text: string,
    hitSearch: Function
}

export default function SearchFilter(props: SearchFilter) {

    return (
        <div className="w-full">
            <input className="bg-gray-200 rounded w-full pl-1"  type="text" value={props.text} placeholder="Search a item" />   
        </div>
    )
}