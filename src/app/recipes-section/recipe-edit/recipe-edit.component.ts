import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    private id:number;
    private editMode:boolean = false;

    private recipeForm:FormGroup;

    constructor(private route:ActivatedRoute,
                private router:Router,
                private recipeService:RecipeService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params:Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }

    private initForm() {

        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);

        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id)
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (let ingr of recipe.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            name: new FormControl(ingr.name, Validators.required),
                            amount: new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
                        })
                    )
                }
            }
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': recipeIngredients
        });
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }))
    }

    onDeleteIngedient(index: number){
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    onSubmit() {
        let editedRecipe = this.recipeForm.value;
       /* let newRecipe = new Recipe(
            editedRecipe.name,
            editedRecipe.description,
            editedRecipe.imagePath,
            editedRecipe.ingredients
        );*/
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, editedRecipe);
        }
        else {
            this.recipeService.addRecipe(editedRecipe);
        }
        this.onCancel();
    }

    onCancel(){
        this.router.navigate(['../'], <NavigationExtras>{relativeTo: this.route});
    }

}
