import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {last} from "rxjs";
import {SubjectCardComponent} from "../subject-card/subject-card.component";
import {SemesterService} from "../../services/semester.service";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent {
    subjectList: Block[] = [];
    subjectService: SubjectService = inject(SubjectService);

    constructor(private semesterService: SemesterService) {
        this.subjectList = this.subjectService.getAllBlocks();
        this.semesterService.setDisplayedSemesters(true);
    }




}
