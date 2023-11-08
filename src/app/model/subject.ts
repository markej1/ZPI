import {Classes, Laboratory, Lecture, Project, Seminar} from "./course";

export interface Subject {
    id: number;
    name: string;
    lecture: Lecture;
    classes: Classes;
    seminar: Seminar;
    laboratory: Laboratory;
    project: Project;
    group_of_courses: string;
    kind_of_subject: string;
    programme_content: string[];
    link: string;
}


