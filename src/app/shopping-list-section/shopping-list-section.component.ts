import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-section',
  templateUrl: './shopping-list-section.component.html',
  styleUrls: ['./shopping-list-section.component.css']
})
export class ShoppingListSectionComponent implements OnInit, OnDestroy {

/*  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];*/
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }
   subscription:Subscription;
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
        (changedIngredients:Ingredient[]) => this.ingredients = changedIngredients
    );
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }

}
