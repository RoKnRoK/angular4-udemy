import { Component, OnInit } from '@angular/core';
import {Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-section',
  templateUrl: './recipes-section.component.html',
  styleUrls: ['./recipes-section.component.css']
})
export class RecipesSectionComponent implements OnInit {

  constructor() { }
  itemSelected:Recipe;
  ngOnInit() {
  }

}
