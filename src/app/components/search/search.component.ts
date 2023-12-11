import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SubjectLecture} from "../../model/subject-lecture";
import {SearchService} from "../../services/http/search.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    subjectList: string[] = [];
    filteredSubjectList: string[] = [];

    subjectLectureList: SubjectLecture[] = [];
    filteredSubjectLectureList: SubjectLecture[] = [];

    subjectWritten = new FormControl('');

    constructor(private searchService: SearchService) {
        this.getSubjectLectureList();
    }

    ngOnInit() {
        this.subjectWritten.valueChanges.subscribe(value => {
            console.log(value);
            this.filteredSubjectList = this.subjectList.sort();
            this.filteredSubjectLectureList =
                this.createFilteredSubjectLectureList(this.subjectLectureList);
                    // .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
            if (value != null) {
                this.filteredSubjectList = this.filteredSubjectList.filter(subject =>
                    subject?.toLowerCase().includes(value.toLowerCase())
                );

                this.filteredSubjectLectureList.forEach(subjectLecture => {
                    subjectLecture.lectures = subjectLecture.lectures.filter(lecture =>
                        lecture?.toLowerCase().includes(value.toLowerCase())
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
                })
                this.subjectLectureList.map(subjectLecture => this.subjectList.push(subjectLecture.subjectName));
                this.filteredSubjectList = this.subjectList.sort();
                this.filteredSubjectLectureList =
                    this.createFilteredSubjectLectureList(this.subjectLectureList);
                // .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
                console.log(this.subjectLectureList);
            }
        });
    }

}
