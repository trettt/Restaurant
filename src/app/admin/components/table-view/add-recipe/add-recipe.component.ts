import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
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

  constructor(
    private recipesService: RecipesService,
    private message: NzMessageService
  ) {}

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
      ingredientsIds: new FormControl(this.selectedIngredients, [
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
  get ingredientsIds(): FormControl {
    return this.addRecipeForm.get('ingredientsIds') as FormControl;
  }
  get imageUrl(): FormControl {
    return this.addRecipeForm.get('imageUrl') as FormControl;
  }

  handleOk(): void {
    const newRecipe: Recipe = this.addRecipeForm.value as Recipe;

    this.recipesService.addRecipe(newRecipe).subscribe((response) => {
      const recipeId = response;
      for (let i of newRecipe.ingredientsIds) {
        this.recipesService.addIngredients(recipeId, i).subscribe();
      }
      this.message.warning(
        "Don't forget to refresh the page to see the changes!"
      );
    });

    this.addRecipeForm.reset();
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.addRecipeForm.reset();
    this.isVisibleChange.emit(false);
  }
}
