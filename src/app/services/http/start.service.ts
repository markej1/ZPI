import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChosenProgram} from "../../model/chosen-program";
import {Level} from "../../model/level";
import {TranslateService} from "@ngx-translate/core";
import {firstValueFrom} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StartService {

    constructor(private http: HttpClient, private translate: TranslateService) {
    }

    getLevels(): Level[] {
        return [
            {
                number: 1,
                levelName: this.translate.instant("First") + " " + this.translate.instant("Level")
            },
            {
                number: 2,
                levelName: this.translate.instant("Second") + " " + this.translate.instant("Level")
            }
        ];
    }

    getDegrees(level: number) {
        return this.http.get<string[]>("https://susel.pythonanywhere.com/list-field/" + level + "/");
    }

    getCycles(level: number, degree: string) {
        return this.http.get<number[]>("https://susel.pythonanywhere.com/list-cycle/" + level + "/" + degree + "/");
    }

    getSpecializations(level: number, field: string, cycle: number): Promise<string[]> {
        return firstValueFrom(this.http.get<string[]>(
            "https://susel.pythonanywhere.com/list-specialization/" + level + "/" + field + "/" + cycle + "/"
        ));
    }

    getChosenProgram(level: number, degree: string, cycle: number) {
        return firstValueFrom(this.http.get<ChosenProgram>("https://susel.pythonanywhere.com/chosen-program/"
            + level + "/" + degree + "/" + cycle + "/"));
    }

    getChosenProgramSpecialization(
        level: number, degree: string, cycle: number, specialization: string
    ) {
        return firstValueFrom(this.http.get<ChosenProgram>("https://susel.pythonanywhere.com/chosen-program/"
            + level + "/" + degree + "/" + cycle + "/" + specialization + "/"));
    }

}
