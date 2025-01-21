import { AfterViewInit, Component, ElementRef, input, OnChanges, output, SimpleChanges, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { forceArray } from '../../utils/various.util';
import { matchAnswers } from '../../utils/prompt.util';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'trader-user-answer',
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './user-answer.component.html',
  styleUrl: './user-answer.component.scss',
  animations: [
    trigger('correct', [
      transition(':increment', animate(3000, keyframes([
        style({ backgroundColor: 'green', offset: .5 }),
      ]))),
    ]),
    trigger('incorrect', [
      transition(':increment', animate(3000, keyframes([
        style({ backgroundColor: 'red', offset: .5 }),
      ]))),
    ]),
  ],
})
export class UserAnswerComponent implements OnChanges, AfterViewInit {
  answers = input.required<string[], string | string[]>({ transform: forceArray })
  correct = output<boolean>()

  protected correctCount = 0
  protected incorrectCount = 0

  private readonly userInput = viewChild.required<ElementRef<HTMLInputElement>>('answer')

  protected checkAnswer(answer: string) {
    const correct = matchAnswers(answer, this.answers())
    if (correct) {
      this.correctCount++
    } else {
      this.incorrectCount++
    }
    this.correct.emit(correct)
  }

  private getReadyForNextUserInput() {
    this.userInput().nativeElement.value = ''
    this.userInput().nativeElement.focus()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['answers']) {
      this.getReadyForNextUserInput()
    }
  }

  ngAfterViewInit(): void {
    this.getReadyForNextUserInput()
  }

}
