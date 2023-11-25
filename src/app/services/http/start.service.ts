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

    getCycles(level: number, degree: string) {
        return this.http.get<string[]>("https://susel.pythonanywhere.com/list-cycle/" + level + "/" + degree + "/");
    }

    getSpecializations(level: number, field: string, cycle: string) {
        return this.http.get<string[]>(
            "https://susel.pythonanywhere.com/list-specialization/" + level + "/" + field + "/" + cycle + "/"
        );
    }

}
