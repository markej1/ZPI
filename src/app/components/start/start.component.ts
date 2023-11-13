import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ProgramShortcutService } from "../../services/program-shortcut.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

    degrees: string[] = [
        "Informatyka Stosowana"
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

    levelSelected?: string;
    degreeSelected?: string;
    cycleSelected?: string;
    specializationSelected?: string;

    constructor(private router: Router, private programShortcutService: ProgramShortcutService) {}

    replaceWrongSigns(text?: string): string | undefined {
        if (text!=null) {
            return text
                .split(" ")
                .join("_")
                .split("/")
                .join("_");
        } else return undefined;
    }

    navigateTo(endOfQuestions: boolean) {
        if (this.specializations.length === 0 || endOfQuestions) {

            this.programShortcutService.setLevelSelected(this.levelSelected);
            this.programShortcutService.setDegreeSelected(this.degreeSelected);
            this.programShortcutService.setCycleSelected(this.cycleSelected);
            this.programShortcutService.setSpecialization(this.specializationSelected);

            const url: string = '/program/' + this.replaceWrongSigns(this.degreeSelected)
                + '/' + this.replaceWrongSigns(this.cycleSelected)
                + '/' + this.replaceWrongSigns(this.specializationSelected);

            this.router.navigateByUrl(url);
        }
    }
}
