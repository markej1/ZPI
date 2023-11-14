import {Component} from '@angular/core';
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {SemesterService} from "../../services/semester.service";


@Component({
    selector: 'app-margin',
    templateUrl: './margin.component.html',
    styleUrls: ['./margin.component.css']
})
export class MarginComponent {

    degreeChosen?: string;
    cycleChosen?: string;

    semesterNumbers: number[] = [];
    chosenSemester?: string;
    semestersAmount?: number;
    displayedSemester?: boolean;

    constructor(
        private programShortcutService: ProgramShortcutService,
        public dialog: MatDialog,
        private semesterService: SemesterService
    ) {

        this.programShortcutService.getDegreeSelected.subscribe(
            degree => this.degreeChosen = degree
        );
        this.programShortcutService.getCycleSelected.subscribe(
            cycle => this.cycleChosen = cycle
        );

        this.semesterService.getSemestersAmount.subscribe(
            amount => this.semestersAmount = amount
        );
        if (this.semestersAmount != null) {
            for (let i = 0; i < this.semestersAmount; i++) {
                this.semesterNumbers.push(i+1);
            }
        }

        this.semesterService.getDisplayedSemesters.subscribe(
            displayed => this.displayedSemester = displayed
        );

        this.semesterService.setChosenSemester(this.chosenSemester!);

    }

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }



}
