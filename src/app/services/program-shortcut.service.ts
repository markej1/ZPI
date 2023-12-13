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


    getEducationLevel(): string | undefined {
        const educationLevel = sessionStorage.getItem("educationLevel");
        if (educationLevel != null) {
            return educationLevel;
        } else return undefined;
    }

    getIsFullTime(): string | undefined {
        const isFullTime = sessionStorage.getItem("isFullTime");
        if (isFullTime != null) {
            return isFullTime;
        } else return undefined;
    }

    getIsGeneralAcademic(): string | undefined {
        const isGeneralAcademic = sessionStorage.getItem("isGeneralAcademic");
        if (isGeneralAcademic != null) {
            return isGeneralAcademic;
        } else return undefined;
    }

    getLanguage(): string | undefined {
        const studiesLanguage = sessionStorage.getItem("studiesLanguage");
        if (studiesLanguage != null) {
            return studiesLanguage;
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


    setEducationLevel(educationLevel?: string) {
        if (educationLevel != null) {
            sessionStorage.setItem("educationLevel", educationLevel);
        }
    }

    setIsFullTime(isFullTime?: string) {
        if (isFullTime != null) {
            sessionStorage.setItem("isFullTime", isFullTime);
        }
    }

    setIsGeneralAcademic(isGeneralAcademic?: string) {
        if (isGeneralAcademic != null) {
            sessionStorage.setItem("isGeneralAcademic", isGeneralAcademic);
        }
    }

    setLanguage(studiesLanguage?: string) {
        if (studiesLanguage != null) {
            sessionStorage.setItem("studiesLanguage", studiesLanguage);
        }
    }

}
