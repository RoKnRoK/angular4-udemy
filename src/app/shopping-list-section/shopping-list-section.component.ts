import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-section',
  templateUrl: './shopping-list-section.component.html',
  styleUrls: ['./shopping-list-section.component.css']
})
export class ShoppingListSectionComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

}
