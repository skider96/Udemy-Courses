import { style } from "@angular/animations";
import { SelectorContext } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
selector: 'my-component',
template: `<p>This is {{ myVariable}}</p>

<button class="button" (click)="onClick()" > submit</button>
<p>{{username}}</p>
`,  // templateUrl: 'my-component.html',
styles: []
})
export class MyComponent {

username: any = 'dani'

reset() {

}
isEmpty = false;

onClick() {
    this.username = 'moshe + tani = vechana lubov';
    this.myVariable = 'hehe';
}
    myVariable: String = "Just a test variable";
}