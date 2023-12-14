import {Component, Inject, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../model/subject";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

    name: string = "";
    subject?: Subject;

    exists?: boolean = true;

    constructor(
        private subjectService: SubjectService,
        @Inject(MAT_DIALOG_DATA) public answerData: any,
        private dialogRef: MatDialogRef<any>
    ) {
    }

    ngOnInit() {
        this.subject =  this.subjectService.getSelectedSubject();
        this.name = this.answerData.name;
        this.subject = this.answerData.subject;

        if (this.subject?.curriculumContent.length === 0) {
            this.exists = false;
        }
        if (this.subject == undefined) {
            this.exists = false;
        }

        if (this.exists) {
            this.dialogRef.updateSize("85%", "85%");
        } else {
            this.dialogRef.updateSize("50%", "35%");
        }
    }


}
