import { Injectable } from '@angular/core';
import { PROMPTS } from '../questions.config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsConfigService {

  questionsConfig$ = of(PROMPTS)

}
