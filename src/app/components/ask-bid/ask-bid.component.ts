import { Component, input } from '@angular/core';
import { VolumeSuffixComponent } from '../volume-suffix/volume-suffix.component';

@Component({
  selector: 'trader-ask-bid',
  imports: [
    VolumeSuffixComponent,
  ],
  templateUrl: './ask-bid.component.html',
  styleUrl: './ask-bid.component.scss'
})
export class AskBidComponent {
  askPrice = input<number>()
  askVolume = input<number>()
  bidPrice = input.required<number>()
  bidVolume = input.required<number>()
  query = input<boolean | undefined>(false)
  cancel = input<boolean | undefined>(false)
}
