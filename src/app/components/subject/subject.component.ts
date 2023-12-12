import {Component, Input} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {MatDialog} from "@angular/material/dialog";
import {SubjectCardComponent} from "../subject-card/subject-card.component";
import {SubjectSelectComponent} from "../subject-select/subject-select.component";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

    @Input() block!: Block;

    changeColor(): string {
        let color: string
        if(this.block.block_type === "Field of study" && this.block.subjects.length === 1) {
            color = '#FEE5A5';
        } else if(this.block.block_type === "Specialization" && this.block.subjects.length === 1) {
            color = "#FCA8A3";
        } else if(this.block.block_type === "Basic science" && this.block.subjects.length === 1) {
            color = "#A5D9FE";
        } else if(this.block.block_type === "General education" && this.block.subjects.length === 1) {
            color = "#85DD88";
        } else if(this.block.block_type === "Field of study" && this.block.subjects.length > 1) {
            color = "#DCB142";
        } else if(this.block.block_type === "Specialization" && this.block.subjects.length > 1) {
            color = "#FF675E";
        } else if(this.block.block_type === "Basic science" && this.block.subjects.length > 1) {
            color = "#1494BC";
        } else if(this.block.block_type === "General education" && this.block.subjects.length > 1) {
            color = "#4DA524";
        } else {
            color = "white"
        }
        return color;
    }

    constructor(private subjectService: SubjectService, public dialog: MatDialog) {
    }

    sendData() {
        if (this.isSubject()) {
            this.subjectService.selectSubject(this.block.subjects[0]);
        } else {
            this.subjectService.selectBlock(this.block);
        }
    }

    openDialog() {
        if (this.isSubject()) {
            this.openSubjectCard()
        } else {
            this.openSubjectSelectDialog()
        }
    }

    openSubjectSelectDialog() {
        this.sendData();
        this.dialog.open(SubjectSelectComponent, {
            data: this.block
        });
    }

    openSubjectCard() {
        this.sendData();
        this.dialog.closeAll();
        this.dialog.open(SubjectCardComponent, {
            height: '85%'
        });
    }

    isSubject(): boolean {
        return this.block.subjects.length == 1;
    }
}
