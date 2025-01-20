import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { makePhraseFromMold } from './utils/any-prompt.util';
import { QuestionStatementComponent } from './components/question-statement/question-statement.component';

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
  readonly z = makePhraseFromMold({
    prompt: 'I want to buy {#1} units of X, for ${$2} each unit',
    reply: '{$1} bid for {#2}'
  })

  readonly z00 = console.log(this.z)
}
