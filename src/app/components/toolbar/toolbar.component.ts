import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trader-toolbar',
  imports: [
    MatButtonModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  nextPrompt = output<void>()
  resetCounters = output<void>()
}
