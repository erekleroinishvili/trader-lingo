import { Component, input } from '@angular/core';
import { VolumeSuffixComponent } from '../volume-suffix/volume-suffix.component';

@Component({
  selector: 'trader-bid',
  imports: [
    VolumeSuffixComponent,
  ],
  templateUrl: './bid.component.html',
  styleUrl: './bid.component.scss'
})
export class BidComponent {
  bidPrice = input.required<number>()
  bidVolume = input.required<number>()
  query = input<boolean | undefined>(false)
  cancel = input<boolean | undefined>(false)
}
