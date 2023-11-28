import { Component, NgModule } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <div id="courses"> #.course"
  template: `
    <h2>{{ getTitle() }}</h2>
    <img src="{{ imageUrl }}" />
<div (click)="onDivClicked()">"
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      [style.backgroundColor]="isActive ? 'blue' : 'white'"
      (click)="onSave($event)"
    >
      Save
    </button>
</div>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/> -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <!-- <img [src]="imageUrl" /> -->
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl =
    'https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_capybara.jpg';
  getTitle() {
    return this.title;
  }
  colSpan = 2;
  courses;
  isActive = false;
  email = "name@domain.com";
onDivClicked(){
  console.log("Div was clicked");
}
onKeyUp(){ console.log(this.email);
}
  onSave($event: any) {
    $event.stopPropagation();
    console.log('Button clicked', $event);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
