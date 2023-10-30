import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProgramShortcutService {

    private degreeSelected = new BehaviorSubject('');
    private cycleSelected = new BehaviorSubject('');
    private specializationSelected = new BehaviorSubject('');

    getDegreeSelected = this.degreeSelected.asObservable();
    getCycleSelected = this.cycleSelected.asObservable();
    getSpecialization = this.specializationSelected.asObservable();

    constructor() {
    }

    setDegreeSelected(degree?: string) {
        if (degree != null) {
            this.degreeSelected.next(degree);
        }
    }

    setCycleSelected(cycle?: string) {
        if (cycle != null) {
            this.cycleSelected.next(cycle);
        }
    }

    setSpecialization(specialization?: string) {
        if (specialization != null) {
            this.specializationSelected.next(specialization);
        }
    }

}
