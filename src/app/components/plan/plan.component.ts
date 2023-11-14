import {Component, inject} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {SemesterService} from "../../services/semester.service";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent {
    subjectList: Block[] = [];
    subjectService: SubjectService = inject(SubjectService);
    allSemesters = false;

    constructor(private semesterService: SemesterService) {
        this.subjectList = this.subjectService.getAllBlocks();
        this.semesterService.setDisplayedSemesters(true);
    }




}
