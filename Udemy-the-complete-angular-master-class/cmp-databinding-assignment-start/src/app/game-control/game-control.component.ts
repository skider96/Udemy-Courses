
import { TimerService } from './timer';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  ngOnInit() {

  }
  onStartGame() {
this.interval = setInterval(() => {
this.intervalFired.emit(this.lastNumber + 1);
this.lastNumber++; // increment
}, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

  constructor() {}
 


}
