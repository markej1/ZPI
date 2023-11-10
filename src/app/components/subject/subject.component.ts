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
        const dialogRef = this.dialog.open(SubjectSelectComponent, {
            data: this.block
        });
    }

    openSubjectCard() {
        this.sendData();
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(SubjectCardComponent, {
            height: '85%'
        });
    }

    // getNavigationRoute(): string[] {
    //     if(this.isSubject()) {
    //         return ['/subject_card', this.block.name];
    //     } else
    //         return ['/subject_select', this.block.name];
    // }

    isSubject(): boolean {
        return this.block.subjects.length == 1;
    }
}
