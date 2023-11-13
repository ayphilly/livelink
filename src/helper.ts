import { allCreators } from "./data";
import { getCreatorModel } from "./models/creatormodel";

export const getCreator = ({id,cb}:getCreatorModel):void=> {
    const creator = allCreators[id]
    cb(creator);
}