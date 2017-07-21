import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../models/recipe-models';
import 'rxjs/RX';

export let RECIPE_SERVICE = new InjectionToken<IRecipeService>('IRecipeService');

export interface IRecipeService {
  getRecipes(): Promise<IRecipe[]>;
  getRecipe(): Promise<IRecipe>;  
}

@Injectable()
export class RecipeService implements IRecipeService {

  constructor(private httpClient: HttpClient) { }

  getRecipes(): Promise<IRecipe[]> {
    return this.getData<IRecipe[]>("content/data/recipies.json");
  }

  getRecipe(): Promise<IRecipe> {
    return this.getData<IRecipe>("content/data/recipe.json");
  }

  private getData<TData>(path: string): Promise<TData> {
    return this.httpClient.get<TData>(path).toPromise();
  }
}
