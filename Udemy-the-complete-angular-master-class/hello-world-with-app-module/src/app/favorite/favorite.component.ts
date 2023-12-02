import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean = false;
  @Output() starClicked = new EventEmitter<void>();

  toggleStar() {
    this.isFavorite = !this.isFavorite;
    this.starClicked.emit();
  }
}
