import {Course} from "./course";

export interface Subject {
    code: string;
    name: string;
//     lecture: Lecture | undefined;
//     classes: Classes | undefined;
//     seminar: Seminar | undefined;
//     laboratory: Laboratory | undefined;
//     project: Project | undefined;
    // group_of_courses: string;
    // kind_of_subject: string;
    curriculumContent: string[];
    // link: string;
    category: string,
    subjectId: string,
    moduleId: string,
    module: string,
    ects: number,
    hasExam: boolean,
    hours: string
  
    lecture?: Course;
    classes?: Course;
    seminar?: Course;
    laboratory?: Course;
    project?: Course;
//     group_of_courses: string;
//     programme_content: string[];
//     link: string;
}



