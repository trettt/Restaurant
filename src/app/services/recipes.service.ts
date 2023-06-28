import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { Category } from '../interfaces/category';
import { Ingredient } from '../interfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl: string = 'https://localhost:7188/api';

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
}
