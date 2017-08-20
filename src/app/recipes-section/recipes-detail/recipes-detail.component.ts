import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipeItem:Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addIngredientsToSL(){
    this.recipeService.addIngredientsToSL(this.recipeItem.ingredients);
  }
}
