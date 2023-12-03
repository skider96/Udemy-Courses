import { CoursesComponent } from './courses.component';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  onRemove(course: any) {
let index = this.courses.indexOf(course);
this.courses.splice(index, 1);
}
onChange(course: any) {
  course.name = 'UPDATED';
}
loadCourses() {
  this.courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ]
}

trackCourse(index: any, course: any) {
return course ? course.id : undefined;
}


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
  courses: any;

  onAdd(){
    this.courses.push({id: 4, name: 'course4'});
  }
  viewMode = 'Something else';
  canSave  = true;
}
