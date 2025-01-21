import { Component, input } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'trader-score-monitor',
  imports: [],
  templateUrl: './score-monitor.component.html',
  styleUrl: './score-monitor.component.scss',
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
    trigger('skipped', [
      transition(':increment', animate(3000, keyframes([
        style({ backgroundColor: 'pink', offset: .5 }),
      ]))),
    ]),
  ],
})
export class ScoreMonitorComponent {
  correct = input(0)
  incorrect = input(0)
  skipped = input(0)
}
