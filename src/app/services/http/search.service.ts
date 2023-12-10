import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SubjectLecture} from "../../model/subject-lecture";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) {
    }

    getSubjectLectures() {
        return this.http.get<SubjectLecture[]>("https://susel.pythonanywhere.com/all-subjects/");
    }

}
