import {Component, OnInit} from '@angular/core';
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

    field_name?: string
    is_general_academic?: string
    education_level?: string
    is_full_time?: string
    language?: string

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
        this.field_name = this.programShortcutService.getDegreeSelected()!;
        this.is_general_academic = this.programShortcutService.getIsGeneralAcademic()!;
        this.education_level = this.programShortcutService.getEducationLevel()!;
        this.is_full_time = this.programShortcutService.getIsFullTime()!;
        this.language = this.programShortcutService.getLanguage()!;
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

    navigate() {
        const url: string = '/plan/' + this.replaceWrongSigns(this.programShortcutService.getDegreeSelected())
            + '/' + this.replaceWrongSigns(this.programShortcutService.getCycleSelected())
            + '/' + this.replaceWrongSigns(this.programShortcutService.getSpecialization());

        this.router.navigateByUrl(url);
    }

}
