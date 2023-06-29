import { Component } from '@angular/core';
import { Dish } from '../../../interfaces/dish';
import { DishService } from '../../../services/dish.service';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-view-menu-page',
  templateUrl: './view-menu-page.component.html',
  styleUrls: ['./view-menu-page.component.scss'],
})
export class ViewMenuPageComponent {
  title: string = '~MENU~';

  recipes!: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((response) => {
      this.recipes = response;
    });
  }
}
