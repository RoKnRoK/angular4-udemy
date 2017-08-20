import { Component, OnInit,/* Output, EventEmitter*/ } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

/*    recipes:Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('A Brand New Recipe', 'This is complex test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
    ];*/

    recipes:Recipe[];

    //@Output() itemSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipes =  this.recipeService.getRecipes();
    }

    //onItemSelected(itemSelected:Recipe) {
    //    this.itemSelected.emit(itemSelected);
    //}
}
