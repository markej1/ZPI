import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HelpScreenComponent} from "../help-screen/help-screen.component";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent {
    constructor(public dialog: MatDialog) {
    }

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

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
