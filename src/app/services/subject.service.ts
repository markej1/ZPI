import { Injectable } from '@angular/core';
import {Subject as MySubject} from "../model/subject";
import {Block} from "../model/block";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    private subject?: MySubject;
    private block!: Block;

    constructor() { }

    selectSubject(subject: MySubject) {
        this.subject = subject;
    }
    getSelectedSubject(): MySubject | undefined {
        return this.subject;
    }

    selectBlock(block: Block) {
        this.block = block;
    }

    getSelectedBlock(): Block {
        return this.block;
    }

    getAllBlocks(): Block[] {
        return [
            {name: "M3 - Aplikacje mobilne", subjects: [
                    {id: 1, name: "Android", lecture: {
                        ECTS: "5",
                        ZZU: "3",
                        CNPS: "40",
                        crediting: "egzamin"
                        }, seminar: {
                            ECTS: "2",
                            ZZU: "1",
                            CNPS: "30",
                            crediting: ""
                        }, classes: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"},
                        project: {
                            ECTS: "",
                            ZZU: "",
                            CNPS: "",
                            crediting: ""
                        }, laboratory:{
                            ECTS: "",
                            ZZU: "",
                            CNPS: "",
                            crediting: ""
                        }, group_of_courses: "TAK",kind_of_subject: "Obowiązkowy", programme_content: [], link: ""},
                    {id: 2, name: "IOS", lecture: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "Egzamin"
                        }, seminar: {
                            ECTS: "",
                            ZZU: "",
                            CNPS: "",
                            crediting: ""
                        }, classes: {
                            ECTS: "3",
                            ZZU: "15",
                            CNPS: "90",
                            crediting: "Zaliczenie na ocenę"},
                        project: {
                            ECTS: "",
                            ZZU: "",
                            CNPS: "",
                            crediting: ""
                        }, laboratory:{
                            ECTS: "",
                            ZZU: "",
                            CNPS: "",
                            crediting: ""
                        }, group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: [
                            "Złożoności (1/4), iteratory.",
                            "Złożoności (2/4), listy wiązane.",
                            "Złożoności (3/4), stosy i kolejki zwykłe.",
                            "Złożoności (4/4), techniki rozwiązywania problemów",
                            "Komparatory, sortowania proste.",
                            "Sortowania efektywne. Kopiec. ",
                            "Wyszukiwania liniowe i binarne, kolejki priorytetowe, tablice mieszające",
                            "Drzewa przedziałowe, kopce dwumianowe, las zbiorów rozłącznych.",
                            "Przekazywanie akcji i danych – intencje, współdziałanie aktywności, użycie aktywności systemowych. Obsługa zmiany konfiguracji. "
                        ], link: "https://wit.pwr.edu.pl/studenci/programy-studiow/2023-2024-studia-i-stopnia"}
                ], exam: "E", block_type: "blok kierunkowy", ects: "4", hours: "22000"
            },
            {name: "M2 - Aplikacje mobilne", subjects: [
                    {id: 3, name: "Android", lecture: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, seminar: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, classes: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"},
                        project: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, laboratory:{
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: [], link: ""},
                    {id: 4, name: "IOS",lecture: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, seminar: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, classes: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"},
                        project: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, laboratory:{
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: [], link: ""},
                    {id: 5, name: "Aplikacje mobilne na platformę android", lecture: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, seminar: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, classes: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"},
                        project: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, laboratory:{
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: [], link: ""}
                ], exam: "E", block_type: "blok kierunkowy", ects: "4", hours: "22000"
            },
            {name: "Organizacja systemów komputerowych", subjects: [
                    {id: 6, name: "Organizacja systemów komputerowych", lecture: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, seminar: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, classes: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"},
                        project: {
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, laboratory:{
                            ECTS: "5",
                            ZZU: "3",
                            CNPS: "40",
                            crediting: "egzamin"
                        }, group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: [], link: ""},
                ], exam: "E", block_type: "przedmiot kierunkowy", ects: "3", hours: "21000"
            },
            // {name: "Algorytmy i struktury danych", subjects: [
            //         {name: "Algorytmy i struktury danych", group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: []},
            //     ], exam: "E", block_type: "przedmiot specjalnościowy", ects: "6", hours: "22100"
            // },
            // {name: "Wprowadzenie do zarządzania projektami informatycznymi", subjects: [
            //         {name: "Wprowadzenie do zarządzania projektami informatycznymi", courses: [], group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: []},
            //     ], exam: "E", block_type: "przedmiot specjalnościowy", ects: "6", hours: "22100"
            // },
            // {name: "Bazy danych", subjects: [
            //         {name: "Bazy danych", group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: []},
            //     ], exam: "E", block_type: "przedmiot specjalnościowy", ects: "6", hours: "22100"
            // },
            // {name: "Projektowanie oprogramowania", subjects: [
            //         {name: "Projektowanie oprogramowania", group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: []},
            //     ], exam: "E", block_type: "praktyka", ects: "6", hours: "22100"
            // },
            // {name: "Algorytmy i struktury danych", subjects: [
            //         {name: "Algorytmy i struktury danych", group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: []},
            //     ], exam: "", block_type: "praca dyplomowa", ects: "6", hours: "22100"
            // },
            // {name: "Sztuczna inteligencja", subjects: [
            //         {name: "Sztuczna inteligencja", group_of_courses: "TAK", kind_of_subject: "Obowiązkowy", programme_content: []},
            //     ], exam: "E", block_type: "przedmiot specjalnościowy", ects: "6", hours: "22100"
            // },

        ]
    }



}
