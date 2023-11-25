import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ProgramShortcutService } from "../../services/program-shortcut.service";
import {StartService} from "../../services/http/start.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

    degrees: string[] = [
        "Informatyka Stosowana"
    ];

    cycles: string[] = [
        "2020/2021",
        "2021/2022",
        "2022/2023",
        "2023/2024"
    ];

    specializations: string[] = [];

    levelSelected?: string;
    level?: number;
    degreeSelected?: string;
    cycleSelected?: string;
    specializationSelected?: string;

    constructor(private router: Router,
                private programShortcutService: ProgramShortcutService,
                private startService: StartService) {}

    getDegrees() {
        if (this.levelSelected != null) {
            this.level = this.findLevel(this.levelSelected)
            this.startService.getDegrees(this.level).subscribe({
                next: degreesGiven => {
                    degreesGiven.map(degree => this.degrees.push(degree));
                }
            });
        }
    }

    findLevel(levelSelected: string): number {
        if (levelSelected.includes("I ") || levelSelected.includes("1")) {
            return 1;
        } else if (levelSelected.includes("II ") || levelSelected.includes("2")) {
            return 2;
        } else {
            return 0;
        }
    }

    getCycles() {
        if (this.degreeSelected != null) {
            this.startService.getCycles(this.level!, this.degreeSelected).subscribe({
                next: cyclesGiven => {
                    cyclesGiven.map(cycle => this.cycles.push(cycle));
                }
            });
        }
    }

    getSpecializations() {
        if (this.cycleSelected != null) {
            this.startService.getSpecializations(this.level!, this.degreeSelected!, this.cycleSelected).subscribe({
                next: specializationsGiven => {
                    specializationsGiven.map(specialization => this.specializations.push(specialization));
                }
            });
        }
    }

    navigateTo(endOfQuestions: boolean) {
        if (this.specializations.length === 0 || endOfQuestions) {

            sessionStorage.removeItem("specializationSelected");

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

    replaceWrongSigns(text?: string): string | undefined {
        if (text!=null) {
            return text
                .split(" ")
                .join("_")
                .split("/")
                .join("_");
        } else return undefined;
    }
}
