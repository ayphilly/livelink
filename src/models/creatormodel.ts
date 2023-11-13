export interface creatorModel {
    image: string;
    name: string ;
    title:string;
    detail:string
}

export interface getCreatorModel {
    id: number;
    cb:(cretor:creatorModel)=>void
}