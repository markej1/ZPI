import {Component, DoCheck, inject, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {SemesterService} from "../../services/semester.service";
import {Subject} from "../../model/subject";
import {ProgramShortcutService} from "../../services/program-shortcut.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent implements DoCheck, OnInit {
    subjectList: Block[] = [];
    subjectService: SubjectService = inject(SubjectService);
    chosenSemester?: string;
    allSemesters = true;
    isLoadingResults: boolean = false;
    semesterAmount: number = 1;

    constructor(
        private semesterService: SemesterService,
        private programShortcutService: ProgramShortcutService,
        private route: ActivatedRoute
    ) {
        this.semesterService.setDisplayedSemesters(true);
    }

    ngOnInit() {
        let blocks: Block[] = []
        let semesters: Subject[][] = []

        this.isLoadingResults = true;
        this.subjectService.getAllBlocks(
            this.changeLevelString(this.route.snapshot.paramMap.get('level')),
            this.route.snapshot.paramMap.get('name'),
            this.changeCycleString(this.route.snapshot.paramMap.get('cycle')),
            this.route.snapshot.paramMap.get('specialization')
        ).subscribe(value => {
            if(value[0]["1"] != undefined) semesters.push(value[0]["1"]);
            if(value[0]["2"] != undefined)semesters.push(value[0]["2"]);
            if(value[0]["3"] != undefined)semesters.push(value[0]["3"]);
            if(value[0]["4"] != undefined)semesters.push(value[0]["4"]);
            if(value[0]["5"] != undefined)semesters.push(value[0]["5"]);
            if(value[0]["6"] != undefined)semesters.push(value[0]["6"]);
            if(value[0]["7"] != undefined)semesters.push(value[0]["7"]);

            this.semesterService.setSemestersAmount(semesters.length)

            let semesterId = 1
            semesters.forEach(semester => {
                semester.forEach(subject => {
                    let tempBlock: Block | undefined = blocks.find(block => block.name === subject.module);
                    if(tempBlock === undefined) {
                        blocks.push({
                            ects: subject.ects,
                            exam: subject.hasExam ? "E" : "",
                            hours: subject.hours,
                            semester: semesterId,
                            subjects: [subject],
                            name: subject.module ?? subject.name,
                            block_type: subject.category
                        });
                    } else {
                        tempBlock.subjects.push(subject);
                    }
                });
                semesterId += 1
            });
            this.isLoadingResults = false;
        });

        this.subjectService.setLoadedBlocks(blocks);
        this.subjectList = blocks.sort((a, b) => a.name.localeCompare(b.name));
    }

    ngDoCheck() {
        this.chosenSemester = this.semesterService.getSemesterChosen();

        this.allSemesters = this.chosenSemester === ("Wszystko" || "All");
        this.allSemesters = this.chosenSemester === "Wszystko" || this.chosenSemester === "All";

        let number = this.chosenSemester?.match(/\d+/);
        let semesterNumber: number | undefined = number ? parseInt(number[0]) : undefined;

        if(semesterNumber) {
            this.subjectList = this.subjectService.getBlocksBySemester(semesterNumber).sort((a, b) => a.name.localeCompare(b.name));
        } else {
            this.subjectList = this.subjectService.getLoadedBlocks().sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    changeLevelString(text: string | null): string {
        if (text === 'I_stopień') return '1'
        else return '2'
    }

    changeCycleString(text: string | null): string {
        if(text !== null) {
            return text.split('_')[0];
        }
        return ""
    }
}
