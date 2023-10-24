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
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        HelpScreenComponent,
        PlanComponent,
        SubjectComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
