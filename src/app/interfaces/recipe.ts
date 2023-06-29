import { Ingredient } from 'src/app/interfaces/ingredient';

export interface Recipe {
  id: number;
  name: string;
  price: number;
  dishesTypeId: number;
  ingredientsIds: number[];
  portionSize: number;
  imageUrl: string;
}
