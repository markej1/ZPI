import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SubjectLecture} from "../../model/subject-lecture";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    subjectList: string[] = [
        "Analiza matematyczna I",
        "Algorytmy i struktury danych",
        "Analiza matematyczna II",
        "Bazy danych",
        "Aplikacje mobilne na platformę Android"
    ];
    filteredSubjectList: string[] = [];

    subjectLectureList: SubjectLecture[] = [
        {
            subjectName: "Bazy danych",
            lectures: [
                "1. Podstawowe pojęcia i terminologia baz danych. Architektura systemu bazy danych.",
                "2. Modele danych. Cechy dobrze zaprojektowanej bazy danych.",
                "3. Projektowanie konceptualne.",
                "4. Diagram obiektowo-związkowy ERD.",
                "5. Projektowanie logiczne. Transformacja ERD do schematu baz danych.",
                "6. Perspektywy. Model fizyczny bazy danych."
            ]
        },
        {
            subjectName: "Aplikacje mobilne na platformę Android",
            lectures: [
                "1. Prezentacja organizacji i programu kursu. Wprowadzenie do tematyki przedmiotu. Przedstawienie platformy Android i narzędzi wytwórczych. ",
                "2. Elementy składowe architektury aplikacji Android i podstawy konstrukcji aplikacji, cykle życia omawianych elementów.",
                "3. Podstawy interfejsu graficznego aplikacji – układy graficzne, kontrolki obsługa zdarzeń wejściowych interfejsu. ",
                "4. Przekazywanie akcji i danych – intencje, współdziałanie aktywności,użycie aktywności systemowych. Obsługa zmiany konfiguracji. ",
                "5. Tworzenie elementów typu menu aplikacji.",
                "6. Elementy interfejsu wymagające adaptera treści."
            ]
        },
        {
            subjectName: "Architektura komputerów",
            lectures: [
                "1. Wprowadzenie do architektury komputerów, klasyfikacja architektur komputerowych. Architektury Harvard, Princeton, Harvard-Princeton, architektura zestawu instrukcji (ISA).",
                "2. Sposoby reprezentacji danych w systemach komputerowych, kodowanie liczb całkowitych, zmiennoprzecinkowych, IEEE 754, porządek bajtów w słowach.",
                "3. Architektura RISC vs CISC, podobieństwa, różnice, przykładowe realizacje obu architektur. Architektura i organizacja przykładowego procesora typu RISC.",
                "4. Wprowadzenie do programowania niskopoziomowego. Kompilacja, asemblacja, linkowanie. Organizacja programu w asemblerze",
                "5. Programowanie w asemblerze I. ",
                "6. Programowanie w asemblerze II."
            ]
        },
        {
            subjectName: "Algorytmy i struktury danych",
            lectures: [
                "1. Złożoności (1/4), iteratory.",
                "2. Złożoności (2/4), listy wiązane.",
                "3. Złożoności (3/4), stosy i kolejki zwykłe.",
                "4. Złożoności (4/4), techniki rozwiązywania problemów.",
                "5. Komparatory, sortowania proste.",
                "6. Sortowania efektywne. Kopiec."
            ]
        },
        {
            subjectName: "Cyberbezpieczeństwo",
            lectures: [
                "1. Wprowadzenie do celu i zakresu zadań cyberbezpieczeństwa.",
                "2. Podstawowe zagadnienia z zakresu kryptologii.",
                "3. Symetryczne algorytmy szyfrujące.",
                "4. Elementy kryptoanalizy.",
                "5. Algorytmy strumieniowe.",
                "6. Algorytmy asymetryczne"
            ]
        }
    ];
    filteredSubjectLectureList: SubjectLecture[] = [];

    subjectWritten = new FormControl('');

    constructor() {
        this.filteredSubjectList = this.subjectList.sort();
        this.filteredSubjectLectureList = this.createFilteredSubjectLectureList(this.subjectLectureList);
    }

    ngOnInit() {
        this.subjectWritten.valueChanges.subscribe(value => {
            this.filteredSubjectList = this.subjectList.sort();
            this.filteredSubjectLectureList = this.createFilteredSubjectLectureList(this.subjectLectureList);
            if (value != null) {
                this.filteredSubjectList = this.filteredSubjectList.filter(subject =>
                    subject?.toLowerCase().includes(value.toLowerCase())
                );

                this.filteredSubjectLectureList.forEach(subjectLecture => {
                    subjectLecture.lectures = subjectLecture.lectures.filter(lecture =>
                        lecture?.toLowerCase().includes(value.toLowerCase())
                    );
                });

                this.filteredSubjectLectureList = this.filteredSubjectLectureList.filter(subjectLecture =>
                    subjectLecture.lectures.length !== 0
                );

            }
        });
    }

    createFilteredSubjectLectureList(subjectLectureList: SubjectLecture[]): SubjectLecture[] {
        let filteredSubjectLectureList: SubjectLecture[] = [];
        subjectLectureList.forEach(subjectLecture => {
            const filteredSubjectLecture: SubjectLecture = {
                subjectName: subjectLecture.subjectName,
                lectures: subjectLecture.lectures
            };
            filteredSubjectLectureList.push(filteredSubjectLecture);
        });
        return filteredSubjectLectureList;
    }

}
