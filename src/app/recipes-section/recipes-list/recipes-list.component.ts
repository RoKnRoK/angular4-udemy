import { Component, OnInit, OnDestroy/* Output, EventEmitter*/ } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

    /*    recipes:Recipe[] = [
     new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
     new Recipe('A Brand New Recipe', 'This is complex test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
     ];*/

    recipes:Recipe[];
    subscription: Subscription;

    //@Output() itemSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor(private recipeService:RecipeService,
                private router:Router,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.subscription = this.recipeService.recipesChanged.subscribe((newRecipes:Recipe[])=>{
           this.recipes = newRecipes;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    //onItemSelected(itemSelected:Recipe) {
    //    this.itemSelected.emit(itemSelected);
    //}

    onNewRecipe() {
        this.router.navigate(['new'], <NavigationExtras>{relativeTo: this.route});
    }
}
