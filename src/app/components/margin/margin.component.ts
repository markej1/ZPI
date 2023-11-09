import {Component} from '@angular/core';
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";


@Component({
    selector: 'app-margin',
    templateUrl: './margin.component.html',
    styleUrls: ['./margin.component.css']
})
export class MarginComponent {

    degreeChosen?: string;
    cycleChosen?: string;

    semesters: string[] = [
        'Semestr 1.',
        'Semestr 2.',
        'Semestr 3.',
        'Semestr 4.',
        'Semestr 5.',
        'Semestr 6.',
        'Semestr 7.',
        'Wszystko'
    ]
    chosenSemester?: string;

    constructor(
        private programShortcutService: ProgramShortcutService,
        public dialog: MatDialog,
    ) {
        this.programShortcutService.getDegreeSelected.subscribe(
            degree => this.degreeChosen = degree
        );
        this.programShortcutService.getCycleSelected.subscribe(
            cycle => this.cycleChosen = cycle
        );
    }

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
