import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-section',
  templateUrl: './shopping-list-section.component.html',
  styleUrls: ['./shopping-list-section.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListSectionComponent implements OnInit {

/*  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];*/
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
        (changedIngredients : Ingredient[]) => this.ingredients = changedIngredients
    );
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }

}
