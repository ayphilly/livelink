import { allCreators } from "./data";
import { getCreatorArgs } from "./models/creatormodel";

export const getCreator = ({id,cb}:getCreatorArgs):void=> {
    const creator = allCreators[id]
    cb(creator);
}