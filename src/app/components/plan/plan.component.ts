import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HelpScreenComponent} from "../help-screen/help-screen.component";
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {last} from "rxjs";
import {SubjectCardComponent} from "../subject-card/subject-card.component";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent {
    subjectList: Block[] = [];
    subjectService: SubjectService = inject(SubjectService);

    constructor() {
        this.subjectList = this.subjectService.getAllBlocks();
    }




}
