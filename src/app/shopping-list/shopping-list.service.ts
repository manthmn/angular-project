import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient("apple", 5),
        new Ingredient("tomato", 15),
        new Ingredient("onion", 10)
    ]

    shoppingListChanged = new EventEmitter<Ingredient[]>()
    getShoppingList(){
        return this.ingredients.slice();
    }

    addItem(item: Ingredient){
        if(this.ingredients.filter(e => e['name'] === item.name).length > 0){
            this.ingredients.filter(e => e['name'] === item.name)[0].amount += item.amount;
        }else{
            this.ingredients.push(item);
        }
        this.shoppingListChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // ingredients.forEach((ingredient: Ingredient) => {     //rather than creating emit for each ingredient
        //     this.addItem(ingredient);
        // })
        this.ingredients.push(...ingredients);
        this.shoppingListChanged.emit(this.ingredients.slice());
    }
}