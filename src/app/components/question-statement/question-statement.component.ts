import { Component } from '@angular/core';
import { AskBidComponent } from '../ask-bid/ask-bid.component';
import { AskComponent } from '../ask/ask.component';
import { BidComponent } from '../bid/bid.component';
import { AnyPromptComponent } from '../any-prompt/any-prompt.component';
import { ShowAnswerComponent } from '../show-answer/show-answer.component';

@Component({
  selector: 'trader-question-statement',
  imports: [
    AskComponent,
    BidComponent,
    AskBidComponent,
    AnyPromptComponent,
    ShowAnswerComponent,
  ],
  templateUrl: './question-statement.component.html',
  styleUrl: './question-statement.component.scss'
})
export class QuestionStatementComponent {
}
