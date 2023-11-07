import { Routes } from '@angular/router';
import {PlanComponent} from "./components/plan/plan.component";
import {SubjectCardComponent} from "./components/subject-card/subject-card.component";
import {SubjectSelectComponent} from "./components/subject-select/subject-select.component";
import {StartComponent} from "./components/start/start.component";
import {MenuComponent} from "./components/menu/menu.component";
import {SearchComponent} from "./components/search/search.component";

const routeConfig: Routes = [
    {
        path: 'plan/:semester',
        component: PlanComponent,
        title: 'Plan studiów'
    },
    {
        path: 'subject_card/:name',
        component: SubjectCardComponent,
        title: 'Karta przedmiotu'
    },
    {
        path: 'subject_select/:name',
        component: SubjectSelectComponent,
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
