import { CoursesComponent } from './courses.component';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
doWeHaveAnyCourses(): any {
return this.courses.length > 0;
}
  isFavorite: boolean = false;
  title = 'hello-world-with-app-module';
  post = {
    title: 'Title',
    isFavorite: true,
  }  
  onStarCLick(){
    console.log('Star clicked!');
  }
  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ]

  viewMode = 'Something else';
}
