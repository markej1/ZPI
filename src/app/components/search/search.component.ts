import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

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
        "Bazy danych"
    ]
    filteredSubjectList: string[] = [];

    subjectWritten = new FormControl('');

    constructor() {
        this.filteredSubjectList = this.subjectList;
    }

    ngOnInit() {
        this.subjectWritten.valueChanges.subscribe(value => {
            this.filteredSubjectList = this.subjectList;
            if (value != null) {
                this.filteredSubjectList = this.filteredSubjectList.filter(subject =>
                    subject?.toLowerCase().includes(value.toLowerCase())
                );
            }
        });
    }

}
