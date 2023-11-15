// A page that shows all creators
import React from "react"
import { Layoutwlogo } from "../../containers/layout"
import { ListCreators } from "../../containers/creatorcont"
import { Searchbox } from "../../components/common"
import { creatorModel } from "../../models/creatormodel"
import { searchCreator } from "../../helper"
import { allCreators } from "../../data"

export const AllCreators = ()=> {
    const [searchName, setSearch] = React.useState<string>('')
    const [filtCreators, setFiltCreator] = React.useState<creatorModel[]>()

    let handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=> {
        let value = e.target.value;
        setSearch(value)
        searchCreator({name:value,cb:setFiltCreator})
    }

    return (
       <Layoutwlogo>
        <div className="w-full flex flex-col gap-[30px] items-center">
            <span className="flex flex-col items-start">
                <Searchbox value={searchName} handleSearch={handleSearch} />
            </span>
            <ListCreators creators = {filtCreators || allCreators} />
        </div>
       </Layoutwlogo>
    )
}