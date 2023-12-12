import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {StartService} from "../../services/http/start.service";
import {ChosenProgram} from "../../model/chosen-program";
import {Level} from "../../model/level";
import {TranslateService} from "@ngx-translate/core";
import {firstValueFrom} from "rxjs";

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

    levels: string[] = [];
    degrees: string[] = [];
    cycles: number[] = [];
    specializations: string[] = [];

    levelsObject: Level[] = []
    cyclesDisplay: string[] = [];

    levelSelected?: string;
    level?: number;
    degreeSelected?: string;
    cycleSelected?: string;
    specializationSelected?: string;

    chosenProgram?: ChosenProgram;

    constructor(private router: Router,
                private programShortcutService: ProgramShortcutService,
                private startService: StartService,
                private translate: TranslateService) {
    }

    async ngOnInit() {
        await firstValueFrom(this.translate.get("translation"));
        this.levelsObject = this.startService.getLevels();
        this.levelsObject.map(levelObject => {
            this.levels.push(levelObject.levelName)
        });
    }

    getDegrees() {
        if (this.levelSelected != null) {
            this.degrees = [];
            this.level = this.makeLevelNumber(this.levelSelected);
            this.startService.getDegrees(this.level).subscribe({
                next: degreesGiven => {
                    degreesGiven.map(degree => this.degrees.push(degree));
                }
            });
        }
    }

    getCycles() {
        if (this.degreeSelected != null) {
            this.cycles = [];
            this.cyclesDisplay = [];
            this.startService.getCycles(this.level!, this.replaceWrongSigns(this.degreeSelected)!)
                .subscribe({
                    next: cyclesGiven => {
                        cyclesGiven.map(cycle => this.cycles.push(cycle));
                    },
                    complete: () => {
                        this.cycles.forEach((cycle: Number) => {
                            this.cyclesDisplay.push(cycle.toString() + "/" + (Number(cycle)+1).toString());
                        });
                    }
                });
        }
    }

    async getSpecializations() {
        if (this.cycleSelected != null) {
            this.specializations = [];
            const specializationsGiven = await this.startService.getSpecializations(
                this.level!,
                this.replaceWrongSigns(this.degreeSelected)!,
                this.makeCycleDisplayedNumber(this.cycleSelected)!
            );
            specializationsGiven.map(specialization => this.specializations.push(specialization));
        }
    }

    async navigateTo(endOfQuestions: boolean) {
        await this.getSpecializations();
        if (this.specializations.length === 0 || endOfQuestions) {

            sessionStorage.removeItem("specializationSelected");

            this.programShortcutService.setLevelSelected(this.levelSelected);
            this.programShortcutService.setDegreeSelected(this.degreeSelected);
            this.programShortcutService.setCycleSelected(this.cycleSelected);
            this.programShortcutService.setSpecialization(this.specializationSelected);

            const url: string = '/program/' + this.replaceWrongSigns(this.degreeSelected)
                + '/' + this.replaceWrongSigns(this.cycleSelected)
                + '/' + this.replaceWrongSigns(this.specializationSelected);

            this.getChosenProgram();
            this.router.navigateByUrl(url).then();
        }
    }

    getChosenProgram() {
        if (this.specializationSelected == null) {
            this.specializationSelected = "";
        }
        this.startService.getChosenProgram(
            this.level!,
            this.replaceWrongSigns(this.degreeSelected)!,
            this.makeCycleDisplayedNumber(this.cycleSelected!)!,
            this.replaceWrongSigns(this.specializationSelected)!
        ).subscribe({
            next: chosenProgramGiven => {
                this.chosenProgram = {
                    officialName: chosenProgramGiven.officialName,
                    profile: chosenProgramGiven.profile,
                    levelOfStudy: chosenProgramGiven.levelOfStudy,
                    formOfStudy: chosenProgramGiven.formOfStudy,
                    semestersAmount: chosenProgramGiven.semestersAmount
                };
            }
        })
    }

    replaceWrongSigns(text?: string): string | undefined {
        if (text != null) {
            return text
                .split(" ")
                .join("_")
                .split("/")
                .join("_");
        } else return undefined;
    }

    makeCycleDisplayedNumber(cycleDisplayed: string): number {
        return Number(cycleDisplayed.split("/")[0]);
    }

    makeLevelNumber(levelSelected: string): number {
        let levelNumber: number = -1;
        this.levelsObject.forEach((levelObj: Level) => {
            if(levelObj.levelName === levelSelected) {
                levelNumber = levelObj.number;
            }
        });
        return levelNumber;
    }

}
