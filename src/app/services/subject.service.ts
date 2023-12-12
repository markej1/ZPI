import { Injectable } from '@angular/core';
import {Subject as MySubject} from "../model/subject";
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
        //level: number, field: string, cycle: number, specialization: string
        return this._httpClient.get<Program[]>(`${this._url}/list-subjects/1/Informatyka_Stosowana/2023/`)
    }

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
