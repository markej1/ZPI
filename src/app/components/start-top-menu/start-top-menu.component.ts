import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
    selector: 'app-start-top-menu',
    templateUrl: './start-top-menu.component.html',
    styleUrls: ['./start-top-menu.component.css']
})
export class StartTopMenuComponent implements AfterViewInit {
    @ViewChild('darkModeSwitch', {read: ElementRef}) element: ElementRef | undefined;

    noIcon = '';

    ngAfterViewInit() {
        if (this.element) {
            this.element.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.noIcon);
            this.element.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.noIcon);
        }
    }

    constructor(private appComponent: AppComponent) {}

    switchLanguage(lang: string) {
        this.appComponent.switchLanguage(lang);
    }

}
