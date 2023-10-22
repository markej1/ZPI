import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="first-row">
        <div class="top-left">
          4 ECTS <br>
          (2 + 2)
        </div>
        <div class="top-right">
          E
        </div>
      </div>
      <div class="row"><div class="subject">Programowanie baz danych</div></div>
      <div class="row">22000</div>
    </div>
  `,
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

}
