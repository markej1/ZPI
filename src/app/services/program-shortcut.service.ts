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


    setEducationLevel(educationLevel?: string, inPolish?: boolean) {
        if (educationLevel != null) {
            switch (educationLevel) {
                case "First-level (inżynier) studies": {
                    if (inPolish) {
                        educationLevel = "studia pierwszego stopnia (inżynierskie)"
                    }
                    break;
                }
                case "First-level (licencjat) studies": {
                    if (inPolish) {
                        educationLevel = "studia pierwszego stopnia (licencjackie)"
                    }
                    break;
                }
                case "Second-level studies": {
                    if (inPolish) {
                        educationLevel = "studia drugiego stopnia"
                    }
                    break;
                }
                case "Magister uniform studies": {
                    if (inPolish) {
                        educationLevel = "jednolite studia magisterskie"
                    }
                    break;
                }
            }
            sessionStorage.setItem("educationLevel", educationLevel.toLowerCase());
        }
    }

    setIsFullTime(isFullTime?: boolean, inPolish?: boolean) {
        if (isFullTime != null) {
            sessionStorage.setItem("isFullTime", this.getIsFullTimeBoolean(isFullTime!, inPolish!));
        }
    }

    getIsFullTimeBoolean(isFullTime: boolean, inPolish: boolean): string {
        if (isFullTime) {
            if (inPolish) {
                return "stacjonarna";
            } else {
                return "full-time studies"
            }
        } else {
            if (inPolish) {
                return "niestacjonarna";
            } else {
                return "part-time studies"
            }
        }
    }

    setIsGeneralAcademic(isGeneralAcademic?: boolean, inPolish?: boolean) {
        if (isGeneralAcademic != null) {
            sessionStorage.setItem("isGeneralAcademic", this.getIsGeneralAcademicBoolean(isGeneralAcademic, inPolish!));
        }
    }

    getIsGeneralAcademicBoolean(isGeneralAcademic: boolean, inPolish: boolean): string {
        if (isGeneralAcademic) {
            if (inPolish) {
                return "ogólnoakademicki";
            } else {
                return "general academic"
            }
        } else {
            if (inPolish) {
                return "praktyczny";
            } else {
                return "practical"
            }
        }
    }

    setLanguage(studiesLanguage?: string) {
        if (studiesLanguage != null) {
            sessionStorage.setItem("studiesLanguage", studiesLanguage);
        }
    }

}
