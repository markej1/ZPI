import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SemestersAmountService {

    private semestersAmount = new BehaviorSubject(0);

    getSemestersAmount = this.semestersAmount.asObservable();

    constructor() {}

    setSemestersAmount(amount: number) {
        if (amount != null) {
            this.semestersAmount.next(amount);
        }
    }

}
