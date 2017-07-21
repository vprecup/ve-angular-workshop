import { Component, OnInit, Inject } from '@angular/core';
import { IRecipe } from '../../models/recipe-models';
import { IRecipeService, RECIPE_SERVICE } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(@Inject(RECIPE_SERVICE) private recipeService: IRecipeService) { }

  recipe: IRecipe;

  async ngOnInit() {
    this.recipe = await this.recipeService.getRecipe();
  }

}
