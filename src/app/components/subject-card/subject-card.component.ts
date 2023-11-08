import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../model/subject";


@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {
    constructor(private subjectService: SubjectService) {
    }

    subject?: Subject;

    ngOnInit() {
        this.subject =  this.subjectService.getSelectedSubject();
    }


}
