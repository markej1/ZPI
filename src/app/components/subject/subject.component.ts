import {Component, Input} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
    @Input() block!: Block;
    changeColor(): string {
        let color = ""
        switch (this.block.block_type) {
            case "przedmiot kierunkowy":
                color = '#FEE5A5';
                break;
            case "przedmiot specjalnościowy":
                color = "#FCA8A3";
                break;
            case "przedmiot nauk podstawowych":
                color = "#A5D9FE";
                break;
            case "przedmiot kształcenia ogólnego":
                color = "#85DD88";
                break;
            case "praca dyplomowa":
                color = "#E7A1FF";
                break;
            case "praktyka":
                color = "#57CBE5";
                break;
            case "blok kierunkowy":
                color = "#DCB142";
                break;
            case "blok specjalnościowy":
                color = "#FF675E";
                break;
            case "blok kształcenia ogólnego":
                color = "#4DA524";
                break;
            case "blok nauk podstawowych":
                color = "#1494BC";
                break;
            default:
                color = 'black';
                break;
        }
        return color;
    }

    // getECTS(subject: Subject): string {
    //     let sum = 0;
    //     subject.courses.forEach(function (course: Course) {
    //         sum += course.ECTS;
    //     })
    //     return "ECTS";
    // }

    constructor(private subjectService: SubjectService, public dialog: MatDialog) {
    }

    sendData() {
        if(this.isSubject()) {
            this.subjectService.selectSubject(this.block.subjects[0]);
        } else {
            this.subjectService.selectBlock(this.block);
        }
    }

    // openBlockSelectDialog() {
    //     const dialogRef = this.dialog.open(SubjectSelectComponent);
    // }

    getNavigationRoute(): string[] {
        if(this.isSubject()) {
            return ['/subject_card', this.block.name];
        } else
            return ['/subject_select', this.block.name];
    }

    isSubject(): boolean {
        return this.block.subjects.length == 1;
    }

}
