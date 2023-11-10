import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SemesterService {

    private semestersAmount = new BehaviorSubject(0);
    private displayedSemesters = new BehaviorSubject(false);

    getSemestersAmount = this.semestersAmount.asObservable();
    getDisplayedSemesters = this.displayedSemesters.asObservable();

    constructor() {}

    setSemestersAmount(amount: number) {
        if (amount != null) {
            this.semestersAmount.next(amount);
        }
    }

    setDisplayedSemesters(displayed: boolean) {
        if (displayed != null) {
            this.displayedSemesters.next(displayed);
        }
    }

}
