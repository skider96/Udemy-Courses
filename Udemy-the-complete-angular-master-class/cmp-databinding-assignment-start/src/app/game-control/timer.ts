// timer.service.ts

import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timer$: Observable<number>;
  private timerSubject = new Subject<number>();

  constructor() {
    this.timer$ = interval(1000); // Emit an event every second
    this.timer$.subscribe(() => {
      // Incrementing number logic
      const incrementedNumber = this.getNextNumber();
      this.timerSubject.next(incrementedNumber);
    });
  }

  getTimer(): Observable<number> {
    return this.timerSubject.asObservable();
  }

  private getNextNumber(): number {
    // Implement your logic to get the next incrementing number
    // For now, let's just return a random number
    return Math.floor(Math.random() * 100);
  }
}
