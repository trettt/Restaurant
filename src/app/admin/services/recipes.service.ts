import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl: string = 'https://localhost:7188/api';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    const token = localStorage.getItem('admin-token');

    if (token) {
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.get<any>(`${this.apiUrl}/Recipes`, { headers });
    } else {
      return throwError('Token missing or expired');
    }
  }
}
