import {Component} from '@angular/core';
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {MatDialog} from "@angular/material/dialog";
import {SemesterService} from "../../services/semester.service";


@Component({
    selector: 'app-margin',
    templateUrl: './margin.component.html',
    styleUrls: ['./margin.component.css']
})
export class MarginComponent {

    levelChosen?: string;
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

        this.levelChosen = this.programShortcutService.getLevelSelected();
        this.degreeChosen = this.programShortcutService.getDegreeSelected();
        this.cycleChosen = this.programShortcutService.getCycleSelected();

        this.semestersAmount = this.semesterService.getSemestersAmount();
        if (this.semestersAmount != null) {
            for (let i = 0; i < this.semestersAmount; i++) {
                this.semesterNumbers.push(i+1);
            }
        }

        this.displayedSemester = this.semesterService.getDisplayedSemesters();

    }

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
