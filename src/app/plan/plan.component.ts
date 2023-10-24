import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HelpScreenComponent} from "../help-screen/help-screen.component";

@Component({
  selector: 'app-plan',
  template: `
      <div class="header">
          <p>
              Informatyka stosowana <br>
              Start 2021/2022
          </p>
          <mat-form-field>
              <mat-label>Select an option</mat-label>
              <mat-select>
                  <mat-option value="1">Option 1</mat-option>
                  <mat-option value="2">Option 2</mat-option>
                  <mat-option value="3">Option 3</mat-option>
              </mat-select>
          </mat-form-field>
      </div>
      <div class="footer">
          <p>Politechnika wrocławska</p>

          <button mat-icon-button (click)="openDialog()">
              <mat-icon>help</mat-icon>
          </button>
      </div>
  `,
  styleUrls: ['./plan.component.css']
})

export class PlanComponent {
    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(HelpScreenComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
