import { Component, input } from '@angular/core';
import { forceArray } from '../../utils/various.util';

@Component({
  selector: 'trader-answer',
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent {
  answers = input.required<string[], string | string[]>({transform: forceArray});
}
