// a container that displays all creators
import { useNavigate } from "react-router-dom"
import { CreatorCard } from "../components/creatorcomp"
import { allCreators } from "../data"

export const ListCreators = ()=> {

    const navigate = useNavigate()
    
    // handles the navigation to view creator deail
    let goToCreatorDetail = (id:number)=> {
        navigate(`/user/${id}`)
    }


    return (
        <section className="w-full flex flex-col items-center gap-[20px]">
            {
                (allCreators ?? []).map((item,id)=> (
                    <CreatorCard key={id.toString()} data={item} id={id} showDetail={false}  showCreatorDetail={goToCreatorDetail}  />
                ))
            }
        </section>
    )
}