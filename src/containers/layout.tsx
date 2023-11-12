import React, { ReactNode } from "react"
import { logo } from "../assets/assets"

interface layoutProps {
    children:ReactNode
}

export const Layoutwlogo:React.FC<layoutProps> = (props)=> {

    // layout component with pre-defined livelink logo as header
    return (
        <section className="w-full h-[100vh] flex flex-col items-center mx-auto gap-[40px] py-[100px] container">
            <img src={logo} className="w-[150px] md:w-[200px]" alt="livelink"  />
            { props.children}
        </section>
    )
}