import { Component } from '@angular/core';
import { AskBidComponent } from '../ask-bid/ask-bid.component';
import { AskComponent } from '../ask/ask.component';
import { BidComponent } from '../bid/bid.component';
import { AnyPromptComponent } from '../any-prompt/any-prompt.component';

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
export class QuestionStatementComponent {
}
