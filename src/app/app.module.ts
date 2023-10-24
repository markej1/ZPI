import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelpScreenComponent} from "./help-screen/help-screen.component";
import {PlanComponent} from "./plan/plan.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {SubjectComponent} from "./subject/subject.component";
import { StartComponent } from './start/start.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        StartComponent
    ],
    imports: [
        BrowserModule,
        HelpScreenComponent,
        PlanComponent,
        BrowserAnimationsModule,
        MatDialogModule,
        SubjectComponent,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
