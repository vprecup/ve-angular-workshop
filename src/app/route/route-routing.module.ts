import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { WeeklyMenuComponent } from '../weekly-menu/weekly-menu.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'weekly-menu', component: WeeklyMenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
