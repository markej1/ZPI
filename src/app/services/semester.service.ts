import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SemesterService {
    getSemestersAmount(): number | undefined {
        const semestersAmount = sessionStorage.getItem("semestersAmount");
        if (semestersAmount != null) {
            return parseInt(semestersAmount);
        } else return undefined;
    }

    getDisplayedSemesters(): boolean {
        const displayed = sessionStorage.getItem("semestersDisplayed");
        return displayed === "true";
    }

    getSemesterChosen(): string | undefined {
        const semesterChosen = sessionStorage.getItem("semesterChosen");
        if (semesterChosen != null) {
            return semesterChosen;
        } else return undefined;
    }

    constructor() {}

    setSemestersAmount(amount: number) {
        sessionStorage.setItem("semestersAmount", amount.toString());
    }

    setDisplayedSemesters(displayed: boolean) {
        if (displayed) {
            sessionStorage.setItem("semestersDisplayed", "true");
        } else {
            sessionStorage.setItem("semestersDisplayed", "false");
        }
    }

    setSemesterChosen(semester: string) {
        sessionStorage.setItem("semesterChosen", semester);
    }
}
