import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SubjectLecture} from "../../model/subject-lecture";
import {Card} from "../../model/card";
import {Course} from "../../model/course";
import {firstValueFrom} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) {
    }

    getSubjectLectures() {
        return this.http.get<SubjectLecture[]>("https://susel.pythonanywhere.com/all-subjects/");
    }

    getCardDetails(
        level: number, field: string, cycle: number, moduleId: string, subjectId: string
    ) {
        return firstValueFrom(this.http.get<Card[]>(
            "https://susel.pythonanywhere.com/desc/" + level + "/" + field + "/" + cycle + "/"
            + moduleId + "/" + subjectId + "/"
        ));
    }

    getCardDetailsSpecialization(
        level: number, field: string, cycle: number, moduleId: string, subjectId: string, specialization: string
    ) {
        return firstValueFrom(this.http.get<Card[]>(
            "https://susel.pythonanywhere.com/desc/" + level + "/" + field + "/" + cycle + "/"
            + moduleId + "/" + subjectId + "/" + specialization + "/"
        ));
    }

    getCardCourseList(cards: Card[]): Course[] {
        console.log(cards.length);
        const courses: Course[] = [];
        cards.forEach((card: Card) => {
            const cardCourse = this.getCardCourse(card);
            courses.push(cardCourse);
        });
        return courses;
    }

    getCardCourse(card: Card): Course {
        return {
            ECTS: card.detalis.ects.toString(),
            ZZU: card.detalis.zzu.toString(),
            CNPS: card.detalis.cnps.toString(),
            crediting: card.detalis.crediting,
            courseGroup: card.detalis.inGroupCourse
        }
    }

    isGroupOfCourseString(cards: Card[]): string {
        let group = "NIE";
        cards.forEach((card: Card) => {
            if (card.detalis.inGroupCourse) {
                group = "TAK";
            }
        });
        return group;
    }

}
