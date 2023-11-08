export interface Course {
    ECTS: string
    ZZU: string
    CNPS: string
    crediting: string
}

export interface Lecture extends Course {
}
export interface Seminar extends Course {
}
export interface Laboratory extends Course {
}
export interface Classes extends Course {
}
export interface Project extends Course {
}
