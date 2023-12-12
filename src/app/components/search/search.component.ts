import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SubjectLecture} from "../../model/subject-lecture";
import {SearchService} from "../../services/http/search.service";
import {MatDialog} from "@angular/material/dialog";
import {SubjectCardComponent} from "../subject-card/subject-card.component";
import {Card} from "../../model/card";
import {Subject} from "../../model/subject";
import {Course} from "../../model/course";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    subjectList: SubjectLecture[] = [];
    filteredSubjectList: SubjectLecture[] = [];

    subjectLectureList: SubjectLecture[] = [];
    filteredSubjectLectureList: SubjectLecture[] = [];

    subjectWritten = new FormControl('');

    chosenSubjectLecture?: SubjectLecture;

    constructor(private searchService: SearchService, private dialog: MatDialog) {
        this.getSubjectLectureList();
    }

    ngOnInit() {
        this.subjectWritten.valueChanges.subscribe(value => {
            this.filteredSubjectList = this.subjectList
                .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
            this.filteredSubjectLectureList =
                this.createFilteredSubjectLectureList(this.subjectLectureList)
                    .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
            if (value != null) {
                this.filteredSubjectList = this.filteredSubjectList.filter(subject =>
                    subject?.subjectName.toString().toLowerCase().includes(value.toString().toLowerCase())
                );

                this.filteredSubjectLectureList.forEach(subjectLecture => {
                    subjectLecture.lectures = subjectLecture.lectures.filter(lecture =>
                        lecture?.toString().toLowerCase().includes(value.toString().toLowerCase())
                    );
                });

                this.filteredSubjectLectureList = this.filteredSubjectLectureList.filter(subjectLecture =>
                    subjectLecture.lectures.length !== 0
                );

            }
        });
    }

    createFilteredSubjectLectureList(subjectLectureList: SubjectLecture[]): SubjectLecture[] {
        let filteredSubjectLectureList: SubjectLecture[] = [];
        subjectLectureList.forEach(subjectLecture => {
            const filteredSubjectLecture: SubjectLecture = {
                id: subjectLecture.id,
                subjectName: subjectLecture.subjectName,
                lectures: subjectLecture.lectures,
                level: subjectLecture.level,
                cycle: subjectLecture.cycle,
                specialization: subjectLecture.specialization,
                name: subjectLecture.name,
                semester: subjectLecture.semester,
                subjectId: subjectLecture.subjectId,
                moduleId: subjectLecture.moduleId
            };
            filteredSubjectLectureList.push(filteredSubjectLecture);
        });
        return filteredSubjectLectureList;
    }

    getSubjectLectureList() {
        const subjectLectureListMock: SubjectLecture[] = [];
        this.searchService.getSubjectLectures().subscribe({
            next: subjectLecturesGiven => {
                subjectLecturesGiven.map(subjectLectureGiven => {
                    subjectLectureListMock.push({
                        id: subjectLectureGiven.id,
                        subjectName: subjectLectureGiven.subjectName,
                        lectures: subjectLectureGiven.lectures,
                        level: subjectLectureGiven.level,
                        cycle: subjectLectureGiven.cycle,
                        specialization: subjectLectureGiven.specialization,
                        name: subjectLectureGiven.name,
                        semester: subjectLectureGiven.semester,
                        subjectId: subjectLectureGiven.subjectId,
                        moduleId: subjectLectureGiven.moduleId
                    });
                });
                subjectLectureListMock.map(subjectLectureMock => {
                    if (subjectLectureMock.subjectName !== "" && subjectLectureMock.id != undefined) {
                        this.subjectLectureList.push(subjectLectureMock);
                    }
                });
                this.subjectLectureList.map(subjectLecture => this.subjectList.push(subjectLecture));
                this.filteredSubjectList = this.createFilteredSubjectLectureList(this.subjectList)
                    .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
                this.filteredSubjectLectureList =
                    this.createFilteredSubjectLectureList(this.subjectLectureList)
                        .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
                console.log(this.filteredSubjectList);
            }
        });
    }

    async fetchCardData() {
        const cardList: Card[] = [];
        let subject: Subject;
        let lecture: Course | null = null;
        let classes: Course | null = null;
        let laboratory: Course | null = null;
        let seminar: Course | null = null;
        let project: Course | null = null;

        if (this.chosenSubjectLecture?.specialization === "") {
            const cardListGiven = await this.searchService.getCardDetails(
                this.chosenSubjectLecture?.level,
                this.chosenSubjectLecture?.name,
                this.chosenSubjectLecture?.cycle,
                this.chosenSubjectLecture?.moduleId,
                this.chosenSubjectLecture?.subjectId
            );
            cardListGiven.forEach((cardGiven) => cardList.push(cardGiven));
        } else {
            const cardSpecializationListGiven = await this.searchService.getCardDetailsSpecialization(
                this.chosenSubjectLecture?.level!,
                this.chosenSubjectLecture?.name!,
                this.chosenSubjectLecture?.cycle!,
                this.chosenSubjectLecture?.specialization!,
                this.chosenSubjectLecture?.moduleId!,
                this.chosenSubjectLecture?.subjectId!
            );
            cardSpecializationListGiven.forEach((cardGiven) => cardList.push(cardGiven));
        }

        const courses: Course[] = this.searchService.getCardCourseList(cardList);
        courses.map((course: Course, index: number)=> {
            if (cardList[index].type === "Lecture") { lecture = course; }
            else if (cardList[index].type === "Classes") { classes = course; }
            else if (cardList[index].type === "Laboratory") { laboratory = course; }
            else if (cardList[index].type === "Seminar") { seminar = course; }
            else if (cardList[index].type === "Project") { project = course; }
        });
        subject = {
            id: this.chosenSubjectLecture?.id!,
            name: this.chosenSubjectLecture?.subjectName!,
            group_of_courses: this.searchService.isGroupOfCourseString(cardList),
            programme_content: this.chosenSubjectLecture?.lectures!,
            link: ""
        };
        if (lecture != null) { subject.lecture = lecture; }
        if (classes != null) { subject.classes = classes; }
        if (laboratory != null) { subject.laboratory = laboratory; }
        if (seminar != null) { subject.seminar = seminar; }
        if (project != null) { subject.project = project; }

        this.openDialogWindow(subject);
    }

    openDialogWindow(subject: Subject) {
        this.dialog.open(SubjectCardComponent, {
            data: {
                name: this.chosenSubjectLecture?.subjectName,
                subject: subject
            }
        });
    }

    displaySubjectName(subjectLecture: SubjectLecture): string {
        return subjectLecture.subjectName;
    }

}
