import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl: string = 'https://localhost:7188/api/Account';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    const signUpData = { firstName, lastName, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, signUpData);
  }

  loginAdmin(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login/adm`, loginData);
  }

  getUserData(): Observable<any> {
    const token =
      localStorage.getItem('userToken') || sessionStorage.getItem('userToken');

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get<any>(`${this.apiUrl}/user/data`, { headers });
  }
}
