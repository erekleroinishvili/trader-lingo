import { Component, HostBinding, input, OnChanges, SimpleChanges } from '@angular/core';
import { AskBidComponent } from '../ask-bid/ask-bid.component';
import { AskComponent } from '../ask/ask.component';
import { BidComponent } from '../bid/bid.component';
import { AnyPromptComponent } from '../any-prompt/any-prompt.component';
import { AnyPrompt } from '../../models/any-prompt.model';
import { AskBidPrompt } from '../../models/ask-bid-prompt.model';

@Component({
  selector: 'trader-question-statement',
  imports: [
    AskComponent,
    BidComponent,
    AskBidComponent,
    AnyPromptComponent,
  ],
  templateUrl: './question-statement.component.html',
  styleUrl: './question-statement.component.scss'
})
export class QuestionStatementComponent implements OnChanges {
  prompt = input.required<AskBidPrompt | AnyPrompt>()

  private flipHorizontal = false

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['prompt']) {
          this.flipHorizontal = this.prompt().type === 'prompt'
            ? false
            : Math.random() < 0.5
      }
  }

  @HostBinding('style.--flip-horizontal') get flipHorizontalCSS() {
    return this.flipHorizontal ? '-1' : '1'
  }
}
