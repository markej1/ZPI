import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    getLanguageChanged() {
        return sessionStorage.getItem("language");
    }

    constructor() {}

    setLanguageChanged(languageChanged?: boolean) {
        if (languageChanged === true) {
            sessionStorage.setItem("language", "en");
        } else {
            sessionStorage.setItem("language", "pl");
        }
    }
}
