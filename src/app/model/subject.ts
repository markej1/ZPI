import {Course} from "./course";

export interface Subject {
    id: number;
    name: string;
    lecture?: Course;
    classes?: Course;
    seminar?: Course;
    laboratory?: Course;
    project?: Course;
    group_of_courses: string;
    programme_content: string[];
    link: string;
}


