import {NgModule} from '@angular/core';
import {BrowserModule, provideProtractorTestingSupport} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelpScreenComponent} from "./components/help-screen/help-screen.component";
import {PlanComponent} from "./components/plan/plan.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {SubjectComponent} from "./components/subject/subject.component";
import { StartComponent } from './components/start/start.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
        NgOptimizedImage,
        MatAutocompleteModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        provideProtractorTestingSupport(),
        provideRouter(routeConfig)
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
