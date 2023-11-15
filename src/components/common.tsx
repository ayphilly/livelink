interface titelBodyProps {
    title:string;
    body:string;
}

export const TitleBody:React.FC<titelBodyProps> = (props)=> {

    const {title,body} = props
    return (
        <span className='flex flex-col gap-[10px] items-center max-w-[80vw] md:max-w-[50vw] lg:max-w-[400px]'>
            <p className='my-0 text-center text-main-902 font-[600] text-[1.25em]'>{title}</p>
            <p className='my-0 text-center text-main-900 font-[400] text-[1em] leading-[1.4em] mb-[20px]'>
               {body}
            </p>
        </span>
    )
}


interface searchProps {
    value:string;
    handleSearch:(e:React.ChangeEvent<HTMLInputElement>)=> void
}

export const Searchbox:React.FC<searchProps> = (props)=> {


    return (
        <input type="text" value={props.value} onChange={props.handleSearch}  placeholder="Search by name" 
            className="lg:w-[350px] h-[50px] bg-white border-[1px] border-main-902 text-[1em] text-main-902
            px-[10px] rounded-[5px] 
            " />
    )
}