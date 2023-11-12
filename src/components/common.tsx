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