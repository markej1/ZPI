import {Component} from '@angular/core';
import {ProgramShortcutService} from "../../services/program-shortcut.service";


@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.css']
})
export class MarginComponent {

    degreeChosen?: string;
    cycleChosen?: string;

    constructor(private programShortcutService: ProgramShortcutService) {
        this.programShortcutService.getDegreeSelected.subscribe(
            degree => this.degreeChosen = degree
        );
        this.programShortcutService.getCycleSelected.subscribe(
            cycle => this.cycleChosen = cycle
        );
    }
}
