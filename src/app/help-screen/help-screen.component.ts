import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-help-screen',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h3>Zajęcia obowiązkowe</h3>
    <div class="grid">
      <div class="column">
        <div class="circle" style="background-color: #ffed80"></div>
        <p class="text">kierunkowe</p>
        <div class="circle" style="background-color: #fd9999"></div>
        <p class="text">specjalnościowe</p>
        <div class="circle" style="background-color: #aa00ff"></div>
        <p class="text">praca dyplomowa</p>
      </div>
      <div class="column">
        <div class="circle" style="background-color: #95daf3"></div>
        <p class="text">z zakresu nauk podstawowych</p>
        <div class="circle" style="background-color: #abfa98"></div>
        <p class="text">kształcenia ogólnego</p>
        <div class="circle" style="background-color: #6c8dff"></div>
        <p class="text">praktyka</p>
      </div>
    </div>
    <h3>Bloki wybieralne</h3>
    <div class="grid">
      <div class="column">
        <div class="circle" style="background-color: #d2b60d"></div>
        <p class="text">kierunkowe</p>
        <div class="circle" style="background-color: #b92828"></div>
        <p class="text">specjalnościowe</p>
      </div>
      <div class="column">
        <div class="circle" style="background-color: #1a9ac0"></div>
        <p class="text">z zakresu nauk podstawowych</p>
        <div class="circle" style="background-color: #68b934"></div>
        <p class="text">kształcenia ogólnego</p>
      </div>
    </div>
    <div class="bottom_grid">
      <div>

      </div>
      <div class="grid2">
        <div>
          liczba punktów ECTS z podziałem na formy kształcenia <br>
          nazwa przedmiotu
        </div>
        <div class="rectangle">

        </div>
        <div>
          przedmiot kończy się egzaminem <br>
          2h - wykład <br>
          2h - ćwiczenia <br>
          0h - laboratorium <br>
          0h - projekt <br>
          0h - seminarium <br>
        </div>
      </div>
    </div>
  `,
    styleUrls: ['./help-screen.component.css']
})
export class HelpScreenComponent {

}
