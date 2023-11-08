import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppComponent} from "../../app.component";
import {LanguageService} from "../../services/language.service";

@Component({
    selector: 'app-start-top-menu',
    templateUrl: './start-top-menu.component.html',
    styleUrls: ['./start-top-menu.component.css']
})
export class StartTopMenuComponent implements AfterViewInit {
    @ViewChild('languageSwitch', {read: ElementRef}) element: ElementRef | undefined;

    noIcon = '';

    languageChanged?: boolean;

    ngAfterViewInit() {
        if (this.element) {
            this.element.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.noIcon);
            this.element.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.noIcon);
        }
    }

    constructor(private appComponent: AppComponent, private languageService: LanguageService) {
        this.languageService.getLanguageChanged.subscribe(
            isLanguageChanged => this.languageChanged = isLanguageChanged
        );
    }

    switchLanguage() {
        this.languageService.setLanguageChanged(this.languageChanged);
        if (this.languageChanged) {
            this.appComponent.switchLanguage('en');
        } else {
            this.appComponent.switchLanguage('pl');
        }
    }

}
