import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@Component({
    selector: 'app-plan',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule],
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.css']
})

export class PlanComponent {
    constructor(public dialog: MatDialog) {
    }

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
