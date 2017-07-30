import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListSectionComponent } from './shopping-list-section/shopping-list-section.component';
import { RecipesSectionComponent } from './recipes-section/recipes-section.component';
import { RecipesListComponent } from './recipes-section/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-section/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes-section/recipes-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list-section/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListSectionComponent,
    RecipesSectionComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
