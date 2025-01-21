import { Component, input } from '@angular/core';

@Component({
  selector: 'trader-score-monitor',
  imports: [],
  templateUrl: './score-monitor.component.html',
  styleUrl: './score-monitor.component.scss'
})
export class ScoreMonitorComponent {
  correct = input(0)
  incorrect = input(0)
  skipped = input(0)
}
