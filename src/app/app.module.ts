import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

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
import {NgOptimizedImage} from "@angular/common";
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import {MatTableModule} from "@angular/material/table";
import { MarginComponent } from './components/margin/margin.component';
import {provideRouter, RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {MatRippleModule} from "@angular/material/core";
import { SubjectSelectComponent } from './components/subject-select/subject-select.component';
import routeConfig from "./routes";

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        HelpScreenComponent,
        PlanComponent,
        SubjectComponent,
        SubjectCardComponent,
        MarginComponent,
        SubjectSelectComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        NgOptimizedImage,
        MatTableModule,
        RouterLink,
        RouterOutlet,
        RouterModule,
        MatRippleModule,
    ],
    providers: [provideRouter(routeConfig)],
    bootstrap: [AppComponent]
})

export class AppModule {
}
