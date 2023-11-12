// a single creator card
import React from "react"
import { motion } from "framer-motion"
import { creatorModel } from "../models/creatormodel"

interface creatorCardProps {
    id:number
    data:creatorModel
    showDetail:boolean
    showCreatorDetail?:(id:number)=>void
}


export const CreatorCard:React.FC<creatorCardProps> = (props)=> {
    
    const {showCreatorDetail, data,showDetail, id} = props

    let handleShowDetail = () => showCreatorDetail && showCreatorDetail(id)

    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-[87vw] md:w-[50%] h-fit px-[15px] pt-[20px] pb-[20px] rounded-[10px] bg-white border-[1.5px] border-main-902
            flex items-start gap-[15px] cursor-pointer"
            onClick={handleShowDetail}
        >

            <div className="min-w-[60px] w-[60px] h-[60px] overflow-clip rounded-full border-[.5px] border-main-902  ">
                <img src={data.image} alt="creator avatar" />
            </div>

            <div className="flex flex-col gap-[20px] text-main-902 text-left">

                <span className="flex flex-col gap-[4px] ">
                    <p className="my-0 text-[1.2em] font-[600] capitalize" > {data.name} </p>
                    <p className="my-0 text-[1em] font-[500] capitalize-first" > {data.title} </p>
                </span>
                {showDetail && (
                    <p className="my-0 text-[1em] font-[500] mb-[25px] capitalize-first">
                        {data.detail}
                    </p>
                )}
            </div>
        </motion.div>
    )
}