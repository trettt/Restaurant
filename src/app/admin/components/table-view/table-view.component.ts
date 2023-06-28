import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Dish } from 'src/app/interfaces/dish';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  recipes!: Recipe[];
  ingredients!: Ingredient[];
  categories!: Category[];

  selectedSortOption: string = 'none';

  isVisible: boolean = false;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((response) => {
      this.recipes = response;
    });
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

  addNewItem() {
    this.isVisible = true;
  }

  editItem(dish: Dish) {}

  deleteItem(data: any): void {
    this.recipesService.deleteRecipe(data).subscribe(() => {
      this.recipes = this.sortedItems.filter((item) => item.id !== data.id);
    });
  }

  get sortedItems(): any[] {
    switch (this.selectedSortOption) {
      case 'none':
        return this.recipes;
      case 'priceL-H':
        return this.recipes.slice().sort((a, b) => a.price - b.price);
      case 'priceH-L':
        return this.recipes.slice().sort((a, b) => b.price - a.price);
      case 'nameA-Z':
        return this.recipes
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      case 'nameZ-A':
        return this.recipes
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
      case 'categoryA-Z':
        return this.recipes.slice().sort((a, b) => {
          const categoryNameA = this.getCategoryName(a.dishesTypeId);
          const categoryNameB = this.getCategoryName(b.dishesTypeId);
          return categoryNameA.localeCompare(categoryNameB);
        });
      case 'categoryZ-A':
        return this.recipes.slice().sort((a, b) => {
          const categoryNameA = this.getCategoryName(a.dishesTypeId);
          const categoryNameB = this.getCategoryName(b.dishesTypeId);
          return categoryNameB.localeCompare(categoryNameA);
        });
      case 'portionSizeL-H':
        return this.recipes
          .slice()
          .sort((a, b) => a.portionSize - b.portionSize);
      case 'portionSizeH-L':
        return this.recipes
          .slice()
          .sort((a, b) => b.portionSize - a.portionSize);
      default:
        return this.recipes;
    }
  }
}
