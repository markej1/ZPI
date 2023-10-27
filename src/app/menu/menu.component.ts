import { Component } from '@angular/core';
import { ChosenProgram } from "../model/chosenProgram";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    degreeChosen = localStorage.getItem('degreeChosen');
    cycleChosen = localStorage.getItem('cycleChosen');
    specializationChosen = localStorage.getItem('specializationChosen');

    chosenProgram: ChosenProgram = {
        name: "Informatyka Stosowana",
        profile: "ogólnoakademicki",
        levelOfStudy: "pierwszy",
        formOfStudy: "stacjonarna"
    }

}
