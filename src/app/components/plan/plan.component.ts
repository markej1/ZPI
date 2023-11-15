import {Component, DoCheck, inject} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {SemesterService} from "../../services/semester.service";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent implements DoCheck {
    subjectList: Block[] = [];
    subjectService: SubjectService = inject(SubjectService);
    chosenSemester?: string;
    allSemesters = true;

    constructor(private semesterService: SemesterService) {
        this.subjectList = this.subjectService.getAllBlocks();
        this.semesterService.setDisplayedSemesters(true);
    }

    ngDoCheck() {
        this.chosenSemester = this.semesterService.getSemesterChosen();

        this.allSemesters = this.chosenSemester === ("Wszystko" || "All");
        this.allSemesters = this.chosenSemester === "Wszystko" || this.chosenSemester === "All";
    }
}
