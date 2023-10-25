import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    degreeChosen = localStorage.getItem('degreeChosen');
    cycleChosen = localStorage.getItem('cycleChosen');
    specializationChosen = localStorage.getItem('specializationChosen');

}
