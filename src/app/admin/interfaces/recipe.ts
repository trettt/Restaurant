import { IngredientWeight } from './ingredientWeight';

export interface Recipe {
  id: number;
  name: string;
  price: number;
  dishesTypeId: number;
  ingredientIdAndWeight: IngredientWeight[];
}
