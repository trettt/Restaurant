import { Ingredient } from 'src/app/interfaces/ingredient';

export interface Recipe {
  id: number;
  name: string;
  price: number;
  dishesTypeId: number;
  recipeIds: Ingredient[];
  portionSize: number;
  imageUrl: string;
}
