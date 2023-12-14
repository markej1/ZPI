import { Injectable } from '@angular/core';
import {Subject, Subject as MySubject} from "../model/subject";
import {Block} from "../model/block";
import {HttpClient} from "@angular/common/http";
import {Program} from "../model/program";
import {Observable} from "rxjs";
import {Card} from "../model/card";
import {Course} from "../model/course";

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

    getAllBlocks(level?: string | null, field?: string | null, cycle?: string | null, specialization?: string | null): Observable<Program[]> {
        // return this._httpClient.get<Program[]>(`${this._url}/list-subjects/1/Informatyka_Stosowana/2023/`)
        if(specialization == null) {
            return this._httpClient.get<Program[]>(`${this._url}/list-subjects/${level}/${field}/${cycle}/`)
        } else {
            return this._httpClient.get<Program[]>(`${this._url}/list-subjects/${level}/${field}/${cycle}/${specialization}/`)
        }
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

}
