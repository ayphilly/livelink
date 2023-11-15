export interface creatorModel {
    id:number;
    image: string;
    name: string ;
    title:string;
    detail:string
}

export interface getCreatorArgs {
    id: number;
    cb:(cretor:creatorModel)=>void
}

export interface searchCreatorArgs {
    name: string;
    cb:(creator:creatorModel[])=>void
}