import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
    <span class="star" [class.active]="isFavorite" (click)="toggleStar()">&#9733;</span>
  `,
  styles: [`
    .star {
      font-size: 24px;
      cursor: pointer;
    }

    .active {
      color: gold;
    }
  `],
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Output() starClicked = new EventEmitter<void>();

  toggleStar() {
    this.isFavorite = !this.isFavorite;
    this.starClicked.emit();
  }
}
