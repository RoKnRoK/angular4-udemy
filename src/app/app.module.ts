import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListSectionComponent } from './shopping-list-section/shopping-list-section.component';
import { RecipesSectionComponent } from './recipes-section/recipes-section.component';
import { RecipesListComponent } from './recipes-section/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-section/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes-section/recipes-list/recipe-item/recipe-item.component';
import { RecipeService } from './recipes-section/recipe.service';

import { ShoppingEditComponent } from './shopping-list-section/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list-section/shopping-list.service';
import { RecipeStartComponent } from './recipes-section/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes-section/recipe-edit/recipe-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListSectionComponent,
    RecipesSectionComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
