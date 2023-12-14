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
        const languageChosen = this.languageService.getLanguageChanged();
        this.languageChanged = languageChosen === 'en';
    }

    switchLanguage() {
        this.languageService.setLanguageChanged(this.languageChanged);
        this.appComponent.switchLanguage(this.languageService);
    }

}
