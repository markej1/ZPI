import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {MatDialog} from "@angular/material/dialog";
import {SemesterService} from "../../services/semester.service";
import {TranslateService} from "@ngx-translate/core";
import {CommunicationService} from "../../services/communication.service";


@Component({
    selector: 'app-margin',
    templateUrl: './margin.component.html',
    styleUrls: ['./margin.component.css']
})
export class MarginComponent implements OnInit {

    levelChosen?: string;
    degreeChosen?: string;
    cycleChosen?: string;

    semesterNumbers: number[] = [];
    semesterChosen?: string;
    semestersAmount?: number;
    displayedSemester?: boolean;

    constructor(
        private programShortcutService: ProgramShortcutService,
        public dialog: MatDialog,
        private semesterService: SemesterService,
        private translate: TranslateService,
        private communicationService: CommunicationService
    ) {

        this.levelChosen = this.programShortcutService.getLevelSelected();
        this.degreeChosen = this.programShortcutService.getDegreeSelected();
        this.cycleChosen = this.programShortcutService.getCycleSelected();

        this.displayedSemester = this.semesterService.getDisplayedSemesters();
    }

    ngOnInit() {
        this.displayedSemester = this.semesterService.getDisplayedSemesters();

        this.communicationService.onNgOnInitCompleted$().subscribe(() => {
            this.semestersAmount = this.semesterService.getSemestersAmount();
            if (this.semestersAmount != null) {
                this.semesterNumbers = []
                for (let i = 0; i < this.semestersAmount; i++) {
                    this.semesterNumbers.push(i + 1);
                }
            }

            this.semesterService.setSemesterChosen(this.translate.instant("All"));
            this.semesterChosen = this.semesterService.getSemesterChosen();
        });
    }

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    changeSemester() {
        this.semesterService.setSemesterChosen(this.semesterChosen!);
    }

}
