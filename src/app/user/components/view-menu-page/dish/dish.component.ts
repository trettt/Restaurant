import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit {
  @Input() recipeData!: Recipe;
  isVisible = false;

  ingredients!: Ingredient[];
  categories!: Category[];

  selectedIngredients!: number[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getIngredients().subscribe((response) => {
      this.ingredients = response;
    });
    this.recipesService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(
      (category) => category.id === categoryId
    );
    return category ? category.name : '';
  }

  getIngredientName(ingredientId: number): string {
    const ingredient = this.ingredients.find(
      (ingredient) => ingredient.id === ingredientId
    );
    return ingredient ? ingredient.name : '';
  }

  isClicked(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
