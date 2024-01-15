import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is simply test', 
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fcrepes-index-64347419e3c7a.jpg%3Fcrop%3D0.888888888888889xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&tbnid=chE5EowDnbVbtM&vet=12ahUKEwiS7OqRnuCDAxVunCcCHRuzCN4QMygFegQIARBe..i&imgrefurl=https%3A%2F%2Fwww.delish.com%2Fcooking%2Frecipe-ideas%2Frecipes%2Fa52114%2Feasy-basic-crepe-recipe%2F&docid=1kka67gtRjMzvM&w=1200&h=675&q=recipe&ved=2ahUKEwiS7OqRnuCDAxVunCcCHRuzCN4QMygFegQIARBe')
];
  constructor() {

}

ngOnInit() {

}
}
