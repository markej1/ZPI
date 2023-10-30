import {NgModule} from '@angular/core';
import {BrowserModule, provideProtractorTestingSupport} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelpScreenComponent} from "./components/help-screen/help-screen.component";
import {PlanComponent} from "./components/plan/plan.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {SubjectComponent} from "./components/subject/subject.component";
import { StartComponent } from './components/start/start.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { MenuComponent } from './components/menu/menu.component';
import {provideRouter, RouterModule} from "@angular/router";
import routeConfig from "./routes";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MarginComponent} from "./components/margin/margin.component";
import { SearchComponent } from './components/search/search.component';
import { StartTopMenuComponent } from './components/start-top-menu/start-top-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        HelpScreenComponent,
        PlanComponent,
        SubjectComponent,
        MenuComponent,
        MarginComponent,
        SearchComponent,
        StartTopMenuComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        RouterModule,
        CommonModule,
        NgOptimizedImage
    ],
    providers: [
        provideProtractorTestingSupport(),
        provideRouter(routeConfig)
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
