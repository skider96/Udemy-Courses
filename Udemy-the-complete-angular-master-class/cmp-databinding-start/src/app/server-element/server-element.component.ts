import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit {
@Input('srvElement') element: {type:string, name:string, content: string};
@Input() name: string;
@ViewChild('heading') header: ElementRef;

constructor() {
  console.log('constructor called!')
}
ngOnChanges(changes: SimpleChanges) {
console.log('ngOnChanges called!')
console.log(changes);
}
ngOnInit() {
  console.log('ngOnInit called!')
  console.log(this.header.nativeElement.textContent);
}
ngDoCheck() {
  console.log('ngDoCheck called!')
}
ngAfterContentInit() {
  console.log('ngAfterContentInit called!')
}

}
