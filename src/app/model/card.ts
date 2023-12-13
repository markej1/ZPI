export interface Card {
    type: String,
    detalis: CardDetails
}

export interface CardDetails {
    cnps: number,
    ects: number,
    hasExam: boolean,
    inGroupCourse: boolean,
    zzu: number,
    hasCurriculum: boolean,
    curriculumContent?: string[],
    crediting: string
}
