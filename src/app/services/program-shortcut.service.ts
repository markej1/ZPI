import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProgramShortcutService {

    getLevelSelected(): string | undefined {
        const level = sessionStorage.getItem("levelSelected");
        if (level != null) {
            return level;
        } else return undefined;
    }

    getDegreeSelected(): string | undefined {
        const degree = sessionStorage.getItem("degreeSelected");
        if (degree != null) {
            return degree;
        } else return undefined;
    }

    getCycleSelected(): string | undefined {
        const cycle = sessionStorage.getItem("cycleSelected");
        if (cycle != null) {
            return cycle;
        } else return undefined;
    }

    getSpecialization(): string | undefined {
        const specialization = sessionStorage.getItem("specializationSelected");
        if (specialization != null) {
            return specialization;
        } else return undefined;
    }

    constructor() {
    }

    setLevelSelected(level?: string) {
        if (level != null) {
            sessionStorage.setItem("levelSelected", level);
        }
    }

    setDegreeSelected(degree?: string) {
        if (degree != null) {
            sessionStorage.setItem("degreeSelected", degree);
        }
    }

    setCycleSelected(cycle?: string) {
        if (cycle != null) {
            sessionStorage.setItem("cycleSelected", cycle);
        }
    }

    setSpecialization(specialization?: string) {
        if (specialization != null) {
            sessionStorage.setItem("specializationSelected", specialization);
        }
    }

}
