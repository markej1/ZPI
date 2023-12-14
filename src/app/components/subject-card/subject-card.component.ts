import {Component, Inject, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../model/subject";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProgramShortcutService} from "../../services/program-shortcut.service";


@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

    name: string = "";
    groupOfCourses: string = "";
    subject?: Subject;
    isSearched: boolean = false;

    constructor(private subjectService: SubjectService, @Inject(MAT_DIALOG_DATA) public answerData: any, private programShortcutService: ProgramShortcutService) {
    }

    ngOnInit() {
        this.subject =  this.subjectService.getSelectedSubject();
        this.name = this.answerData.name;
        this.groupOfCourses = this.answerData.groupOfCourses;
        this.subject = this.answerData.subject;
        if(this.answerData.search) this.isSearched = this.answerData.search;
        // this.subject?.link = this.getLink();
    }

    getLink(): string {
        switch(this.subject?.category) {
            case "Physics": return "https://wppt.pwr.edu.pl/studenci/karty-przedmiotow-poza-wppt"
            case "Mathematics": return "https://wmat.pwr.edu.pl/studenci/kursy-ogolnouczelniane/karty-przedmiotow/karty-przedmiotow-ogolnouczelnianych/studia-stacjonarne"
            case "Foreign languages": return "https://sjo.pwr.edu.pl/"
            case "Sporting classes": return "https://swfis.pwr.edu.pl/"
            default: return `https://wit.pwr.edu.pl/studenci/programy-studiow/${this.getCycle()}-studia-${this.getLevel()}-stopnia`
        }
    }

    getLevel(): string {
        if(this.isSearched) {
            if(this.answerData.level === 1) return "i"
            else if(this.answerData.level === 2) return "ii"
            else return ""
        } else {
            if(this.programShortcutService.getLevelSelected() === "I stopień") return "i"
            else if(this.programShortcutService.getLevelSelected() === "II stopień") return "ii"
            else return ""
        }
    }
    getCycle() {
        if(this.programShortcutService.getCycleSelected() !== undefined) {
            return this.programShortcutService.getCycleSelected()?.split("/").join("-")
        } else {
            return `${this.answerData.cycle}-${this.answerData.cycle + 1}`
        }

    }


}
