import {Subject} from "./subject";

export interface Block {
    name: string;
    hours: string;
    ects: number;
    exam: string;
    block_type: string;
    subjects: Subject[];
    semester: number | undefined
}
