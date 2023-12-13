import { Routes } from '@angular/router';
import {PlanComponent} from "./components/plan/plan.component";
import {StartComponent} from "./components/start/start.component";
import {MenuComponent} from "./components/menu/menu.component";
import {SearchComponent} from "./components/search/search.component";

const routeConfig: Routes = [
    {
        path: 'plan/:level/:name/:cycle/:specialization',
        component: PlanComponent,
        title: 'Plan studiów'
    },
    {
        path: 'plan/:level/:name/:cycle',
        component: PlanComponent,
        title: 'Plan studiów'
    },
    {
        path: "",
        component: StartComponent,
        title: "Programy studiów"
    },
    {
        path: "program/:name/:cycle/:specialization",
        component: MenuComponent,
        title: "Menu"
    },
    {
        path: "search",
        component: SearchComponent,
        title: "Wyszukaj program studiów"
    }
];

export default routeConfig;
