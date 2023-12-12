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

    chosenProgram: ChosenProgram = {
        field_name: "Informatyka Stosowana",
        is_general_academic: "ogólnoakademicki",
        education_level: "pierwszy",
        is_full_time: "stacjonarna",
        language: "polski",
        semestersAmount: 7
    }

    specializationChosen?: string;

    menuUrl: string = "";

    constructor(
        private programShortcutService: ProgramShortcutService,
        private semesterService: SemesterService,
        private router: Router,
        public loaderService: LoaderService
    ) {
        this.specializationChosen = this.programShortcutService.getSpecialization();
        this.semesterService.setSemestersAmount(this.chosenProgram.semestersAmount);
        this.semesterService.setDisplayedSemesters(false);
    }

    ngOnInit() {
        this.menuUrl = this.router.url;
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
