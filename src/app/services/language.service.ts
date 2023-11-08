import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private languageChanged = new BehaviorSubject(false);

    getLanguageChanged = this.languageChanged.asObservable();

    constructor() {}

    setLanguageChanged(languageChanged?: boolean) {
        if (languageChanged != null) {
            this.languageChanged.next(languageChanged);
        }
    }
}
