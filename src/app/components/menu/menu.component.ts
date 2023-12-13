import {Component, OnInit} from '@angular/core';
import {ChosenProgram} from "../../model/chosen-program";
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {Router} from "@angular/router";
import {SemesterService} from "../../services/semester.service";
import {LoaderService} from "../../services/loader.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    chosenProgram?: ChosenProgram;

    specializationChosen?: string;

    menuUrl: string = "";

    constructor(
        private programShortcutService: ProgramShortcutService,
        private semesterService: SemesterService,
        private router: Router,
        public loaderService: LoaderService
    ) {
    }

    ngOnInit() {
        this.specializationChosen = this.programShortcutService.getSpecialization();
        this.semesterService.setDisplayedSemesters(false);
        this.menuUrl = this.router.url;
        this.chosenProgram = {
            field_name: this.programShortcutService.getDegreeSelected()!,
            is_general_academic: this.programShortcutService.getIsGeneralAcademic()! === "true",
            education_level: this.programShortcutService.getEducationLevel()!,
            is_full_time: this.programShortcutService.getIsFullTime()! === "true",
            language: this.programShortcutService.getLanguage()!
        };
        console.log(this.chosenProgram);
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

    navigate() {
        const url: string = '/plan/' + this.replaceWrongSigns(this.programShortcutService.getDegreeSelected())
            + '/' + this.replaceWrongSigns(this.programShortcutService.getCycleSelected())
            + '/' + this.replaceWrongSigns(this.programShortcutService.getSpecialization());

        this.router.navigateByUrl(url);
    }

}
