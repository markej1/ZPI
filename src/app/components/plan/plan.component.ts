import {Component, DoCheck, inject, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";
import {SemesterService} from "../../services/semester.service";
import {Subject} from "../../model/subject";

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

    constructor(private semesterService: SemesterService) {
        // this.subjectList = this.subjectService.getAllBlocks();
        this.semesterService.setDisplayedSemesters(true);
    }

    ngOnInit() {
        let blocks: Block[] = []
        let semesters: Subject[][] = []

        this.isLoadingResults = true;
        this.subjectService.getAllBlocks().subscribe(value => {
            semesters.push(value[0]["1"]);
            semesters.push(value[0]["2"]);
            semesters.push(value[0]["3"]);
            semesters.push(value[0]["4"]);
            semesters.push(value[0]["5"]);
            semesters.push(value[0]["6"]);
            semesters.push(value[0]["7"]);

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
        this.subjectList = blocks;
    }

    ngDoCheck() {
        this.chosenSemester = this.semesterService.getSemesterChosen();

        this.allSemesters = this.chosenSemester === ("Wszystko" || "All");
        this.allSemesters = this.chosenSemester === "Wszystko" || this.chosenSemester === "All";

        let number = this.chosenSemester?.match(/\d+/);
        let semesterNumber: number | undefined = number ? parseInt(number[0]) : undefined;

        if(semesterNumber) {
            this.subjectList = this.subjectService.getBlocksBySemester(semesterNumber);
        } else {
            this.subjectList = this.subjectService.getLoadedBlocks();
        }
    }
}
