import { Component } from '@angular/core';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.css']
})
export class MarginComponent {

    degreeChosen = localStorage.getItem('degreeChosen');
    cycleChosen = localStorage.getItem('cycleChosen');

}
