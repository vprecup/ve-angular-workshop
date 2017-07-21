import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route/route.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { ToDayOfWeekPipe } from './to-day-of-week.pipe';

import { IRecipeService, RecipeService, RECIPE_SERVICE } from './recipe.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RecipeComponent,
    WeeklyMenuComponent,
    ToDayOfWeekPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouteModule,
    FormsModule
  ],
  providers: [{ provide: RECIPE_SERVICE, useClass: RecipeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
