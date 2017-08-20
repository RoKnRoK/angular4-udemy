import { EventEmitter /*Injectable*/ } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes:Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('A Brand New Recipe', 'This is complex test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor() {
    }
    getRecipes(){
        return this.recipes.slice();
    }
}
