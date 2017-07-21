import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs/Observable';
import { IRecipe } from '../model/i-recipe';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css']
})
export class WeeklyMenuComponent implements OnInit {

  recipes: Observable<IRecipe[]>;

  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
