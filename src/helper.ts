import { allCreators } from "./data";
import { getCreatorArgs, searchCreatorArgs } from "./models/creatormodel";

export const getCreator = ({id,cb}:getCreatorArgs):void=> {
    const creator = allCreators[id]
    cb(creator);
}

export const searchCreator = ({name,cb}:searchCreatorArgs):void => {

    let creator = allCreators.filter( creator => creator.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    cb(creator)
}