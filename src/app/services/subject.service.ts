import { Injectable } from '@angular/core';
import {Subject, Subject as MySubject} from "../model/subject";
import {Block} from "../model/block";
import {HttpClient} from "@angular/common/http";
import {Program} from "../model/program";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    private allBlocks: Block[] = []
    private subject?: MySubject;
    private block!: Block;
    private _url = "https://susel.pythonanywhere.com"

    constructor(private _httpClient: HttpClient) {}

    selectSubject(subject: MySubject) {
        this.subject = subject;
    }
    getSelectedSubject(): MySubject | undefined {
        return this.subject;
    }

    selectBlock(block: Block) {
        this.block = block;
    }

    getSelectedBlock(): Block {
        return this.block;
    }

    getLoadedBlocks(): Block[] {
        return this.allBlocks
    }

    setLoadedBlocks(blockList: Block[]) {
        this.allBlocks = blockList
    }

    getAllBlocks(): Observable<Program[]> {
        return this._httpClient.get<Program[]>(`https://susel.pythonanywhere.com/list-subjects/1/Informatyka_Stosowana/2023/`)
    }

    // getAllBlocks(): Block[] {
    //     let isLoadingResults: boolean = true;
    //     let blocks: Block[] = []
    //     let semesters: Subject[][] = []
    //     let program =
    //         this._httpClient.get<Program[]>(
    //             `https://susel.pythonanywhere.com/list-subjects/1/Informatyka_Stosowana/2023/`
    //         ).subscribe(value => {
    //             semesters.push(value[0]["1"]);
    //             semesters.push(value[0]["2"]);
    //             semesters.push(value[0]["3"]);
    //             semesters.push(value[0]["4"]);
    //             semesters.push(value[0]["5"]);
    //             semesters.push(value[0]["6"]);
    //             semesters.push(value[0]["7"]);
    //
    //             let semesterId = 1
    //             semesters.forEach(semester => {
    //                 semester.forEach(subject => {
    //                     let tempBlock: Block | undefined = blocks.find(block => block.name === subject.module);
    //                     if(tempBlock === undefined) {
    //                         blocks.push({
    //                             ects: subject.ects,
    //                             exam: subject.hasExam ? "E" : "",
    //                             hours: subject.hours,
    //                             semester: semesterId,
    //                             subjects: [subject],
    //                             name: subject.module ?? subject.name,
    //                             block_type: subject.category
    //                         });
    //                     } else {
    //                         tempBlock.subjects.push(subject);
    //                     }
    //                 });
    //                 semesterId += 1
    //             });
    //             isLoadingResults = false;
    //         });
    //
    //     blocks.forEach(a => {
    //         if(a.subjects.length > 1) {
    //             console.log(a)
    //         }
    //     });
    //
    //     this.allBlocks = blocks;
    //     return blocks;
    // }

    getBlocksBySemester(semester: number): Block[] {
        let resultBlock: Block[] = []

        this.allBlocks.forEach(block => {
            if(block.semester === semester) {
                resultBlock.push(block);
            }
        });

        return resultBlock;
    }

    // getSubjectDetails(subject: Subject) {
    //     let details: Observable<> = this._httpClient.get(this._url + `/desc/${subject.moduleId}/${subject.subjectId}/`)
    // }
}
