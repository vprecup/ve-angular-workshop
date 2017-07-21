import { Component, OnInit, Inject } from '@angular/core';
import { IRecipe } from '../../models/recipe-models';
import { IRecipeService, RECIPE_SERVICE } from '../recipe.service';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css']
})
export class WeeklyMenuComponent implements OnInit {
  constructor(@Inject(RECIPE_SERVICE) private recipeService: IRecipeService) { }

  recipies: IRecipe[];

  ngOnInit() {
    this.recipeService.getRecipes().then(value => this.recipies = value );
  }
}
