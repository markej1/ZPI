import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProgramShortcutService {

    private levelSelected = new BehaviorSubject('');
    private degreeSelected = new BehaviorSubject('');
    private cycleSelected = new BehaviorSubject('');
    private specializationSelected = new BehaviorSubject('');

    getLevelSelected = this.levelSelected.asObservable();
    getDegreeSelected = this.degreeSelected.asObservable();
    getCycleSelected = this.cycleSelected.asObservable();
    getSpecialization = this.specializationSelected.asObservable();

    constructor() {
    }

    setLevelSelected(level?: string) {
        if (level != null) {
            this.levelSelected.next(level);
        }
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
