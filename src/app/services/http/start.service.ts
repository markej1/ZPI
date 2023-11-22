import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StartService {

    constructor(private http: HttpClient) {}

    getDegrees(level: number) {
        return this.http.get<string[]>("https://susel.pythonanywhere.com/list-field/" + level + "/");
    }

    getCycles(degree: string) {
        return this.http.get<string[]>("https://susel.pythonanywhere.com/list-cycles/" + degree + "/");
    }

    getSpecializations(field: string, cycle: string) {
        return this.http.get<string[]>(
            "https://susel.pythonanywhere.com/list-field/" + field + "/" + cycle + "/"
        );
    }
//     cycle has '/' inside

}
