import { Component, effect, input } from '@angular/core';
import { forceArray } from '../../utils/various.util';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'trader-show-answer',
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './show-answer.component.html',
  styleUrl: './show-answer.component.scss'
})
export class ShowAnswerComponent {
  answers = input.required<string[], string | string[]>({transform: forceArray})

  protected showing = false;

  private readonly resetShowing = effect(() => {
    if ( this.answers() ) {
      this.showing = false;
    }
  })

  protected readonly log = console.log

}
