import { Component } from '@angular/core';
import { ChosenProgram } from "../../model/chosenProgram";
import { ProgramShortcutService } from "../../services/program-shortcut.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    chosenProgram: ChosenProgram = {
        officialName: "Informatyka Stosowana",
        profile: "ogólnoakademicki",
        levelOfStudy: "pierwszy",
        formOfStudy: "stacjonarna"
    }

    specializationChosen?: string;

    constructor(private programShortcutService: ProgramShortcutService) {
        this.programShortcutService.getSpecialization.subscribe(
            specialization => this.specializationChosen = specialization
        );
    }

}
