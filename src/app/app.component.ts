import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionStatementComponent } from './components/question-statement/question-statement.component';
import { PROMPTS } from './questions.config';
import { makeAnyPromptFromMold } from './utils/any-prompt.util';
import { getRandomPrompt } from './utils/prompt.util';

@Component({
  selector: 'trader-root',
  imports: [
    RouterOutlet,
    QuestionStatementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    const prompt1 = PROMPTS.at(-1)!.prompt!
    if ( prompt1.type === 'prompt' ) {
      console.log(makeAnyPromptFromMold(prompt1))
    }

    for (let i = 0; i < 10; i++) {
      console.log(getRandomPrompt(PROMPTS));
    }
  }
}
