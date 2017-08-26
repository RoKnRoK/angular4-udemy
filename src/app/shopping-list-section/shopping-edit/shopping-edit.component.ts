import { Component, OnInit,OnDestroy, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    //@ViewChild("nameInput") nameInput:ElementRef;
    //@ViewChild("amountInput") amountInput:ElementRef;

    @ViewChild('form') form:NgForm;
    @Output() ingredientAdded:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    private subscription:Subscription;
    editMode = false;
    editedItemIndex:number;
    editedItem:Ingredient;

    constructor(private shopListService:ShoppingListService) {
    }

    ngOnInit() {
        this.subscription = this.shopListService.startedEditing.subscribe((index:number)=> {
            this.editMode = true;
            this.editedItemIndex = index;
            this.editedItem = this.shopListService.getIngredient(index);
            this.form.setValue(this.editedItem);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onAddIngredient(form:NgForm) {
        //const ingrName = this.nameInput.nativeElement.value;
        //const ingrAmount = this.amountInput.nativeElement.value;
        const ingrName = form.value.name;
        const ingrAmount = form.value.amount;
        if (this.editMode) {
            this.shopListService.updateIngredient(this.editedItemIndex, new Ingredient(ingrName, ingrAmount));
        } else {
            this.ingredientAdded.emit(new Ingredient(ingrName, ingrAmount));
        }
        form.reset();
        this.editMode = false;
    }

    onClearForm(){
        this.form.reset();
        this.editMode = false;
    }
    onDelete(){
        this.onClearForm();
        this.shopListService.deleteIngredient(this.editedItemIndex);
    }
}
