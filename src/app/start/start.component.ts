import { Component } from '@angular/core';
import { Program } from "../interfaces/program";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

    programs: Program[] = [
        {
            id: 0,
            name: "Informatyka Stosowana - I st.",
            educationCycles: [
                "2018/2019",
                "2019/2020",
                "2020/2021",
                "2021/2022",
                "2022/2023",
                "2023/2024"
            ],
            specializations: []
        },
        {
            id: 0,
            name: "Informatyka Stosowana - II st.",
            educationCycles: [
                "2021/2022",
                "2022/2023",
                "2023/2024"
            ],
            specializations: [
                "ZSTI",
                "PSI",
                "IO"
            ]
        }
    ]

    degreeSelected = false;
    degreeName?: string;

    onChooseDegree(degreeName: string) {
        this.degreeSelected = true;
        this.degreeName = degreeName;
    }

}
