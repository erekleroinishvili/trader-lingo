import { Component, inject } from '@angular/core';
import { getRandomPrompt } from '../../utils/prompt.util';
import { QuestionsConfigService } from '../../services/questions-config.service';
import { map, startWith, Subject, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { QuestionStatementComponent } from '../question-statement/question-statement.component';
import { ShowAnswerComponent } from '../show-answer/show-answer.component';

@Component({
  selector: 'trader-game',
  imports: [
    AsyncPipe,
    JsonPipe,
    QuestionStatementComponent,
    ShowAnswerComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  private readonly questionsConfig$ = inject(QuestionsConfigService).questionsConfig$;

  protected readonly nextQuestion$ = new Subject<void>()

  protected readonly question$ = this.questionsConfig$.pipe(
    switchMap((questionsConfig) => this.nextQuestion$.pipe(
      startWith(null),
      map(() => getRandomPrompt(questionsConfig))
    ))
  )
}
