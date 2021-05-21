import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core'
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Cheeseburger', 'The Perfect Sandwich', 'https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80', [ new Ingredient('Ground Beef Patty', 1), new Ingredient('Tomato', 1)]),
    new Recipe('Pizza', 'Not Just Your Basic Pie', 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', [new Ingredient('Pizza Crust', 1), new Ingredient('Basil', 3)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }

  }
