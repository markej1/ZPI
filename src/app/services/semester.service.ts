import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SemesterService {

    private semestersAmount = new BehaviorSubject(0);

    getSemestersAmount(): number | undefined {
        const semestersAmountStorage = sessionStorage.getItem("semestersAmount");
        if (semestersAmountStorage != null) {
            return parseInt(semestersAmountStorage);
        } else return undefined;
    }

    getDisplayedSemesters(): boolean {
        const displayed = sessionStorage.getItem("semestersDisplayed");
        return displayed === "true";
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

}
