import React from "react";
import { CreatorCard } from "../../components/creatorcomp"
import { Layoutwlogo } from "../../containers/layout"
import { allCreators } from "../../data";
import { creatorModel } from "../../models/creatormodel";
import { useParams } from "react-router-dom";
import { TitleBody } from "../../components/common";


export const CreatorDetail = ()=> {

    const [currentCreator, setCurrentCreator] = React.useState<creatorModel>();
    const [loading, setLoading] = React.useState<boolean>(true)
    
    // getting selected creator id from the url
    const { id } = useParams();

    React.useEffect(() => {

        // gets creator from list of creators using the id from the url.
        const creator = allCreators[Number(id)]
        setCurrentCreator(creator);

        // sets loading to false after getting creator
        setLoading(false)
    }, [id]);

    //  this handles mini loading of the page
    if (loading){
        return (
            <Layoutwlogo>
                <p>Loading... please wait</p>
            </Layoutwlogo>
        )
    }
    
    // Handle the case when the creator with the specified id doesn't exist
    // also shows the creator detail when found
    else {
        return (
            <Layoutwlogo>
             {
                 !currentCreator ? <TitleBody
                     title="OOps :("
                     body={`Sorry, Creator with id ${id} was not found, please try again.`}
                 /> :<CreatorCard id={Number(id)} data={currentCreator} showDetail={true}  />
             }
             
            </Layoutwlogo>
         )
    }
    
}