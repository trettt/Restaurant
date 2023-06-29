import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { Category } from '../interfaces/category';
import { Ingredient } from '../interfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl: string = 'https://localhost:7188/api';
  private recipesSubject = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    const token = sessionStorage.getItem('adminToken');

    if (token) {
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.get<Recipe[]>(`${this.apiUrl}/Recipes`, { headers });
    } else {
      return throwError('Token missing or expired');
    }
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/DishesType`);
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/Ingredients`);
  }

  addRecipe(recipe: Recipe): Observable<any> {
    const payload = {
      name: recipe.name,
      price: recipe.price,
      dishesTypeId: recipe.dishesTypeId,
      imageUrl: recipe.imageUrl,
      portionSize: recipe.portionSize,
    };
    const token = sessionStorage.getItem('adminToken');

    if (token) {
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.post(`${this.apiUrl}/Recipes`, payload, { headers });
    } else {
      return throwError('Token missing or expired');
    }
  }

  addIngredients(recipeId: number, ingredientId: number): Observable<any> {
    const payload = {
      recipeId: recipeId,
      ingredientId: ingredientId,
    };

    const token = sessionStorage.getItem('adminToken');

    if (token) {
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.put(
        `${this.apiUrl}/Recipes/addIngredient/${recipeId}/${ingredientId}`,
        payload,
        { headers }
      );
    } else {
      return throwError('Token missing or expired');
    }
  }

  deleteRecipe(recipe: Recipe): Observable<any> {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      const headers = { Authorization: `Bearer ${token}` };
      const url = `${this.apiUrl}/Recipes/${recipe.id}`;
      return this.http.delete(url, { headers });
    } else {
      return throwError('Token missing or expired');
    }
  }
}
