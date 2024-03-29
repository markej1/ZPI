import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {StartService} from "../../services/http/start.service";
import {ChosenProgram} from "../../model/chosen-program";
import {Level} from "../../model/level";
import {TranslateService} from "@ngx-translate/core";
import {firstValueFrom} from "rxjs";
import {LoaderService} from "../../services/loader.service";

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

    visible2?: boolean = false;
    visible3?: boolean = false;
    visible4?: boolean = false;

    constructor(private router: Router,
                private programShortcutService: ProgramShortcutService,
                private startService: StartService,
                private translate: TranslateService,
                public loaderService: LoaderService) {
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
            this.loaderService.setLoading1(true);
            this.startService.getDegrees(this.level).subscribe({
                next: degreesGiven => {
                    degreesGiven.map(degree => this.degrees.push(degree));
                },
                complete: () => {
                    this.loaderService.setLoading1(false);
                    this.visible2 = true;
                    this.visible3 = false;
                    this.visible4 = false;
                    this.degreeSelected = undefined;
                    this.cycleSelected = undefined;
                    this.specializationSelected = undefined;
                }
            });
        }
    }

    getCycles() {
        if (this.degreeSelected != null) {
            this.cycles = [];
            this.cyclesDisplay = [];
            this.loaderService.setLoading2(true);
            this.startService.getCycles(this.level!, this.replaceWrongSigns(this.degreeSelected)!)
                .subscribe({
                    next: cyclesGiven => {
                        cyclesGiven.map(cycle => this.cycles.push(cycle));
                    },
                    complete: () => {
                        this.cycles.forEach((cycle: Number) => {
                            this.cyclesDisplay.push(cycle.toString() + "/" + (Number(cycle)+1).toString());
                        });
                        this.loaderService.setLoading2(false);
                        this.visible3 = true;
                        this.visible4 = false;
                        this.cycleSelected = undefined;
                        this.specializationSelected = undefined;
                    }
                });
        }
    }

    async getSpecializations() {
        if (this.cycleSelected != null) {
            this.specializations = [];
            this.loaderService.setLoading3(true);
            const specializationsGiven = await this.startService.getSpecializations(
                this.level!,
                this.replaceWrongSigns(this.degreeSelected)!,
                this.makeCycleDisplayedNumber(this.cycleSelected)!
            );
            specializationsGiven.map(specialization => this.specializations.push(specialization));
            this.loaderService.setLoading3(false);
            this.visible4 = true;
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

            await this.getChosenProgram();
            this.router.navigateByUrl(url).then();
        }
    }

    async getChosenProgram() {
        this.loaderService.setLoading4(true);
        if (this.specializationSelected == null) {
            this.chosenProgram = await this.startService.getChosenProgram(
                this.level!,
                this.replaceWrongSigns(this.degreeSelected)!,
                this.makeCycleDisplayedNumber(this.cycleSelected!)!
            );
            this.programShortcutService.setEducationLevel(
                this.chosenProgram?.education_level,
                this.chosenProgram?.inPolish
            );
            this.programShortcutService.setIsFullTime(
                this.chosenProgram?.is_full_time,
                this.chosenProgram?.inPolish
            );
            this.programShortcutService.setIsGeneralAcademic(
                this.chosenProgram?.is_general_academic,
                this.chosenProgram?.inPolish
            );
            this.programShortcutService.setLanguage(this.chosenProgram?.language);
            this.loaderService.setLoading4(false);
        } else {
            this.chosenProgram = await this.startService.getChosenProgramSpecialization(
                this.level!,
                this.replaceWrongSigns(this.degreeSelected)!,
                this.makeCycleDisplayedNumber(this.cycleSelected!)!,
                this.replaceWrongSigns(this.specializationSelected)!
            );
            this.programShortcutService.setEducationLevel(
                this.chosenProgram?.education_level,
                this.chosenProgram?.inPolish
            );
            this.programShortcutService.setIsFullTime(
                this.chosenProgram?.is_full_time,
                this.chosenProgram?.inPolish
            );
            this.programShortcutService.setIsGeneralAcademic(
                this.chosenProgram?.is_general_academic,
                this.chosenProgram?.inPolish
            );
            this.programShortcutService.setLanguage(this.chosenProgram?.language);
            this.loaderService.setLoading4(false);
        }
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
