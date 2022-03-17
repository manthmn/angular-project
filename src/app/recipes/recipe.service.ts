import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe("RotiSabji", "this is a test recipe", "https://bit.ly/365Aa9n", 
        [new Ingredient("Roti", 1), new Ingredient("Sabji", 4)]),
        new Recipe("PohaJalebi", "this is a test recipe1", "https://bit.ly/365Aa9n",
        [new Ingredient("Poha", 4), new Ingredient("Jalebi", 2)]),
        new Recipe("DaalChawal", "this is a test recipe2", "https://bit.ly/365Aa9n",
        [new Ingredient("Daal", 2), new Ingredient("Chawal", 6)])
    ];

    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}