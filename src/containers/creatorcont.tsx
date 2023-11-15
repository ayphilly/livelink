// a container that displays all creators
import { useNavigate } from "react-router-dom"
import { CreatorCard } from "../components/creatorcomp"
import { creatorModel } from "../models/creatormodel"

interface ListCreatorsProps {
    creators:creatorModel[]
}
export const ListCreators:React.FC<ListCreatorsProps> = (props)=> {

    const {creators} = props
    const navigate = useNavigate()
    
    // handles the navigation to view creator deail
    let goToCreatorDetail = (id:number)=> {
        navigate(`/creator/${id}`)
    }


    return (
        <section className="w-full flex flex-col items-center gap-[20px]">
            {
                (creators ?? []).map((item,id)=> (
                    <CreatorCard key={id.toString()} data={item} id={item.id} showDetail={false}  showCreatorDetail={goToCreatorDetail}  />
                ))
            }
        </section>
    )
}