import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

    degrees: string[] = [
        "Informatyka Stosowana - I st.",
        "Informatyka Stosowana - II st."
    ]

    cycles: string[] = [
        "2020/2021",
        "2021/2022",
        "2022/2023",
        "2023/2024"
    ]

    specializations: string[] = [
        "ZSTI",
        "PSI",
        "IO"
    ]

    degreeSelected?: string;
    cycleSelected?: string;
    specializationSelected?: string;

    constructor(private router: Router) {}

    replaceWrongSigns(text?: string): string | undefined {
        if (text!=null) {
            return text
                .split(" ")
                .join("_")
                .split("/")
                .join("_");
        } else return undefined;
    }

    navigateTo() {
        const url: string = '/program/' + this.replaceWrongSigns(this.degreeSelected)
            + '/' + this.replaceWrongSigns(this.cycleSelected)
            + '/' + this.replaceWrongSigns(this.specializationSelected);
        this.router.navigateByUrl(url);
    }

}
