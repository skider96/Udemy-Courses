import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

onClick = false;
clickCounter = [];


 problem = false;

  onClickTest() {
 this.onClick = true;
 const timestamp = new Date().toLocaleTimeString();
 
 this.clickCounter.push(`${this.clickCounter.length + 1} timestamp:${timestamp}`);
}
}
