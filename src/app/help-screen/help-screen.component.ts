import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-help-screen',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
    templateUrl: './help-screen.component.html',
    styleUrls: ['./help-screen.component.css']
})
export class HelpScreenComponent {

}
