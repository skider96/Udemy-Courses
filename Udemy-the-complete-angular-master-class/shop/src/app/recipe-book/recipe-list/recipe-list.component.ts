import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is simply test', 
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70'),
  new Recipe('Another test Recipe', 'This is simply test', 
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70'),
]
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {

}

ngOnInit() {

}


onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
}
}
