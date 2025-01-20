import { Component, input } from '@angular/core';
import { forceArray } from '../../utils/various.util';

@Component({
  selector: 'trader-any-prompt',
  imports: [],
  templateUrl: './any-prompt.component.html',
  styleUrl: './any-prompt.component.scss'
})
export class AnyPromptComponent {
  prompt = input.required<string[], string | string[]>({transform: forceArray})
}
