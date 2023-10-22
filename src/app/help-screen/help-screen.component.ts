import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      help-screen works!
    </p>
  `,
  styleUrls: ['./help-screen.component.css']
})
export class HelpScreenComponent {

}
