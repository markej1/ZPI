import {Course} from "./course";

export interface Subject {
    code: string;
    name: string;
    curriculumContent: string[];
    category: string,
    subjectId: string,
    moduleId: string,
    module: string,
    ects: number,
    ectsString: string,
    hasExam: boolean,
    hours: string
    id?: number
    lecture?: Course;
    classes?: Course;
    seminar?: Course;
    laboratory?: Course;
    project?: Course;
    group_of_courses: string;
//     programme_content: string[];
    link?: string;
}



