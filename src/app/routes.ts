import { Routes } from '@angular/router';
import {PlanComponent} from "./components/plan/plan.component";
import {SubjectCardComponent} from "./components/subject-card/subject-card.component";
import {SubjectSelectComponent} from "./components/subject-select/subject-select.component";

const routeConfig: Routes = [
    {
        path: '',
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
    }
];

export default routeConfig;
