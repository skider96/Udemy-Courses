import { Component} from '@angular/core';
 
@Component({
    selector: 'courses', // <div id="courses"> #.course" 
    template: `
             <h2>{{ getTitle() }}</h2>
             <ul>
                 <li *ngFor="let course of courses">
                     {{ course}}
                </li>
             </ul>   
    `
})
export class CoursesComponent {
title = "List of courses"
getTitle() { return this.title; }

courses;
}