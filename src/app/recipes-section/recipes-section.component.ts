import { Component, OnInit } from '@angular/core';
import {Recipe } from './recipe.model';
//import {RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipes-section',
    templateUrl: './recipes-section.component.html',
    styleUrls: ['./recipes-section.component.css'],
    //providers: [RecipeService]
})
export class RecipesSectionComponent implements OnInit {

    constructor(/*private recipeService:RecipeService*/) {
    }

    //itemSelected:Recipe;

    ngOnInit() {
       /* this.recipeService.recipeSelected.subscribe(
            (recipeItem:Recipe) => {
                this.itemSelected = recipeItem;
            }
        );*/
    }

}
