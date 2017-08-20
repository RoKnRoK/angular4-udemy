//import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

//@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }

}
