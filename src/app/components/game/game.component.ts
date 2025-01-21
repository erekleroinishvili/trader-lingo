import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, startWith, Subject, switchMap } from 'rxjs';
import { QuestionsConfigService } from '../../services/questions-config.service';
import { getRandomPrompt } from '../../utils/prompt.util';
import { QuestionStatementComponent } from '../question-statement/question-statement.component';
import { ScoreMonitorComponent } from '../score-monitor/score-monitor.component';
import { ShowAnswerComponent } from '../show-answer/show-answer.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { UserAnswerComponent } from '../user-answer/user-answer.component';

@Component({
  selector: 'trader-game',
  imports: [
    AsyncPipe,
    ToolbarComponent,
    ScoreMonitorComponent,
    QuestionStatementComponent,
    ShowAnswerComponent,
    UserAnswerComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  private readonly questionsConfig$ = inject(QuestionsConfigService).questionsConfig$;

  private readonly nextQuestion$ = new Subject<void>()

  protected readonly question$ = this.questionsConfig$.pipe(
    switchMap((questionsConfig) => this.nextQuestion$.pipe(
      startWith(null),
      map(() => getRandomPrompt(questionsConfig))
    )),
  )

  protected correctCount = 0
  protected incorrectCount = 0
  protected skippedCount = 0

  protected processOutcome(correct: boolean) {
    if ( correct) {
      this.correctCount++
      this.nextQuestion$.next()
    } else {
      this.incorrectCount++
    }
  }

  protected skipQuestion() {
    this.skippedCount++
    this.nextQuestion$.next()
  }

  protected resetCounters() {
    this.correctCount = 0
    this.incorrectCount = 0
    this.skippedCount = 0
  }

}
