import { Component, OnInit } from '@angular/core';
import { AfterContentInit,  ViewChild } from '@angular/core';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { RecipeService } from '../recipe.service';
import { IRecipe } from '../model/i-recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, AfterContentInit {

  @ViewChild(IngredientsComponent)
  private ingredientsComponent: IngredientsComponent;

  recipe: IRecipe;

  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    this.recipe = await this.recipeService.getRecipe().toPromise(); // .then(data => this.recipe = data);
  }

  ngAfterContentInit(): void {
    // this.ingredientsComponent.ingredients = this.recipe.recipeIngredients;
  }

}
