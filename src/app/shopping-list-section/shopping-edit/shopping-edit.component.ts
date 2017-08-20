import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild("nameInput") nameInput:ElementRef;
    @ViewChild("amountInput") amountInput:ElementRef;

    @Output() ingredientAdded:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit() {
    }

    onAddIngredient() {
        const ingrName = this.nameInput.nativeElement.value;
        const ingrAmount = this.amountInput.nativeElement.value;
        if (ingrName !== "" && ingrAmount > 0) {
            this.ingredientAdded.emit(new Ingredient(ingrName, ingrAmount));
        }
    }

}
