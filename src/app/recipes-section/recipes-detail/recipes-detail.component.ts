import { Component, OnInit, /*Input*/ } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  /*@Input()*/ recipeItem:Recipe;
  id:number
  constructor(
      private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params : Params) => {
          this.id = +params['id'];
          this.recipeItem = this.recipeService.getRecipe(this.id);
    });
  }

  addIngredientsToSL(){
    this.recipeService.addIngredientsToSL(this.recipeItem.ingredients);
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
