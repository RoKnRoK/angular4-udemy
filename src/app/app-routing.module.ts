import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListSectionComponent } from './shopping-list-section/shopping-list-section.component';
import { RecipesSectionComponent } from './recipes-section/recipes-section.component';
import { RecipesDetailComponent } from './recipes-section/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes-section/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes-section/recipe-start/recipe-start.component';

const appRoutes : Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesSectionComponent, children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipesDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent}
    ]},
    { path: 'shoplist', component: ShoppingListSectionComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }