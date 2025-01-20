import { Component, input } from '@angular/core';
import { forceArray } from '../../utils/various.util';

@Component({
  selector: 'trader-show-answer',
  imports: [],
  templateUrl: './show-answer.component.html',
  styleUrl: './show-answer.component.scss'
})
export class ShowAnswerComponent {
  answer = input.required<string[], string | string[]>({transform: forceArray})
}
