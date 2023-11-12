import { AllCreators } from "../pages/creator/creator";
import { CreatorDetail } from "../pages/creator/creatordetail";

interface baseRouteModel {
    path: string;
    component: React.ComponentType;
}

const allCreatorsRoute: baseRouteModel = {
    path: '/',
    component: AllCreators,
};

const creatorDetailRoute: baseRouteModel = {
    path: '/user/:id',
    component: CreatorDetail,
};


export const allRoutes:baseRouteModel[] = [
    allCreatorsRoute,creatorDetailRoute
]