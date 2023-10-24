import {Routes} from "@angular/router";
import {StartComponent} from "./start/start.component";
import {MenuComponent} from "./menu/menu.component";

const routeConfig: Routes = [
    {
        path: "",
        component: StartComponent,
        title: "Programy studiów"
    },
    {
        path: "program/:name/:cycle/:specialization",
        component: MenuComponent,
        title: "Menu"
    }
];

export default routeConfig;
