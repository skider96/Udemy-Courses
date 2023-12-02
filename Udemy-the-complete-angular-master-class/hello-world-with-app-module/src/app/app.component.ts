import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isFavorite: boolean = false;
  title = 'hello-world-with-app-module';
  post = {
    title: 'Title',
    isFavorite: true,
  }  
  onStarCLick(){
    console.log('Star clicked!');
  }

}
