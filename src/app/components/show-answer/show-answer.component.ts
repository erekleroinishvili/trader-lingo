import { Component, input } from '@angular/core';
import { forceArray } from '../../utils/various.util';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trader-show-answer',
  imports: [
    MatButtonModule,
  ],
  templateUrl: './show-answer.component.html',
  styleUrl: './show-answer.component.scss'
})
export class ShowAnswerComponent {
  answers = input.required<string[], string | string[]>({transform: forceArray})

  showing = false;

}
