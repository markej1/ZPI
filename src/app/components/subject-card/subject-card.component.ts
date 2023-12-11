import {Component, Inject, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../model/subject";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

    name: string = "";
    kindOfSubject: string = "";

    constructor(private subjectService: SubjectService, @Inject(MAT_DIALOG_DATA) public answerData: any) {
    }

    subject?: Subject;

    ngOnInit() {
        this.subject =  this.subjectService.getSelectedSubject();
        this.name = this.answerData.name;
        this.kindOfSubject = this.answerData.kindOfSubject;
    }


}
