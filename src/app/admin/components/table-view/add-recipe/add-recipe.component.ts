import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from 'ng-zorro-antd/core/config';
import { Category } from 'src/app/interfaces/category';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  addRecipeForm!: FormGroup;

  categories!: Category[];
  ingredients!: Ingredient[];

  selectedCategory!: Category;
  selectedIngredients!: Ingredient[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.recipesService
      .getCategories()
      .subscribe((response) => (this.categories = response));
    this.recipesService
      .getIngredients()
      .subscribe((response) => (this.ingredients = response));
  }

  initializeForm() {
    this.addRecipeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      dishesTypeId: new FormControl(this.selectedCategory, [
        Validators.required,
      ]),
      portionSize: new FormControl(null, [Validators.required]),
      recipeIds: new FormControl(this.selectedIngredients, [
        Validators.required,
      ]),
      imageUrl: new FormControl(null, [Validators.required]),
    });
  }

  get name(): FormControl {
    return this.addRecipeForm.get('name') as FormControl;
  }
  get price(): FormControl {
    return this.addRecipeForm.get('price') as FormControl;
  }
  get dishesTypeId(): FormControl {
    return this.addRecipeForm.get('dishesTypeId') as FormControl;
  }
  get portionSize(): FormControl {
    return this.addRecipeForm.get('portionSize') as FormControl;
  }
  get recipeIds(): FormControl {
    return this.addRecipeForm.get('recipeIds') as FormControl;
  }
  get imageUrl(): FormControl {
    return this.addRecipeForm.get('imageUrl') as FormControl;
  }

  handleOk(): void {
    const newRecipe: Recipe = this.addRecipeForm.value as Recipe;

    this.recipesService.addRecipe(newRecipe).subscribe((response: any) => {
      console.log(response);
      const recipeId = response.id; // Salvați ID-ul rețetei adăugate
      // Utilizați ID-ul rețetei pentru alte operații
    });

    this.addRecipeForm.reset();
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.addRecipeForm.reset();
    this.isVisibleChange.emit(false);
  }
}
