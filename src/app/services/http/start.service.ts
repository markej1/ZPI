import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChosenProgram} from "../../model/chosen-program";

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

    getChosenProgram(level: number, degree: string, cycle: string, specialization: string) {
        return this.http.get<ChosenProgram>("https://susel.pythonanywhere.com/chosen-program/" + level + "/"
            + degree + "/" + cycle + "/" + specialization)
    }

}
