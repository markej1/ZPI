import {Component, Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
    title = 'ZPI';

    constructor(public translate: TranslateService) {
        translate.addLangs(['pl','en']);
        translate.setDefaultLang('pl');
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
    }

}
