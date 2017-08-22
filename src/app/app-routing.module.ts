import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListSectionComponent } from './shopping-list-section/shopping-list-section.component';
import { RecipesSectionComponent } from './recipes-section/recipes-section.component';

const appRoutes : Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesSectionComponent },
    { path: 'shoplist', component: ShoppingListSectionComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }