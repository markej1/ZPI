import {Component, Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./services/language.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
    title = 'ZPI';

    constructor(public translate: TranslateService, private languageService: LanguageService) {
        translate.addLangs(['pl','en']);
        translate.setDefaultLang('pl');
        this.switchLanguage(this.languageService);
    }

    switchLanguage(languageService: LanguageService) {
        const language = languageService.getLanguageChanged();
        if (language != null) {
            this.translate.use(language);
        }
    }

}
