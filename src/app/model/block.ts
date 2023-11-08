import {Subject} from "./subject";


export interface Block {
    name: string;
    hours: string;
    ects: string;
    exam: string;
    block_type: string;
    subjects: Subject[];
}
