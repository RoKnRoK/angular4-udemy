import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListSectionComponent } from './shopping-list-section/shopping-list-section.component';
import { RecipesSectionComponent } from './recipes-section/recipes-section.component';
import { RecipesListComponent } from './recipes-section/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-section/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes-section/recipes-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list-section/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list-section/shopping-list.service'


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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
