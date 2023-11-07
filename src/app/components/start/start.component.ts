import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

    degrees: string[] = [
        "Informatyka Stosowana - I st.",
        "Informatyka Stosowana - II st."
    ]

    cycles: string[] = [
        "2020/2021",
        "2021/2022",
        "2022/2023",
        "2023/2024"
    ]

    specializations: string[] = [
        "ZSTI",
        "PSI",
        "IO"
    ]

    degreeSelected?: string;
    cycleSelected?: string;
    specializationSelected?: string;

}
