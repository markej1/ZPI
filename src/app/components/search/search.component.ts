import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    subjectList: string[] = [
        "Analiza matematyczna I",
        "Algorytmy i struktury danych",
        "Analiza matematyczna II",
        "Bazy danych"
    ]

    subjectWritten = new FormControl('');

}
