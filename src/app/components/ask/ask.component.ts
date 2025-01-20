import { Component, input } from '@angular/core';
import { VolumeSuffixComponent } from '../volume-suffix/volume-suffix.component';

@Component({
  selector: 'trader-ask',
  imports: [
    VolumeSuffixComponent,
  ],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss'
})
export class AskComponent {
  askPrice = input<number>()
  askVolume = input<number>()
  query = input<boolean>(false)
  cancel = input<boolean>(false)
}
