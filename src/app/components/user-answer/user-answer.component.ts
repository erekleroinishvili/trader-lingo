import { AfterViewInit, Component, ElementRef, input, OnChanges, output, SimpleChanges, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { forceArray } from '../../utils/various.util';
import { matchAnswers } from '../../utils/prompt.util';

@Component({
  selector: 'trader-user-answer',
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './user-answer.component.html',
  styleUrl: './user-answer.component.scss'
})
export class UserAnswerComponent implements OnChanges, AfterViewInit {
  answers = input.required<string[], string | string[]>({transform: forceArray})
  correct = output<boolean>()

  private readonly userInput = viewChild.required<ElementRef<HTMLInputElement>>('answer')

  protected checkAnswer(answer: string) {
console.log('Checking answer:', answer)
    this.correct.emit(matchAnswers(answer, this.answers()))
  }

  private getReadyForNextUserInput() {
    this.userInput().nativeElement.value = ''
    this.userInput().nativeElement.focus()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['answers'] ) {
      this.getReadyForNextUserInput()
    }
  }

  ngAfterViewInit(): void {
    this.getReadyForNextUserInput()
  }

}
