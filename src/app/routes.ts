import {Routes} from "@angular/router";
import {StartComponent} from "./start/start.component";
import {MenuComponent} from "./menu/menu.component";
import {SearchComponent} from "./search/search.component";

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
    },
    {
        path: "search",
        component: SearchComponent,
        title: "Wyszukaj program studiów"
    }
];

export default routeConfig;
