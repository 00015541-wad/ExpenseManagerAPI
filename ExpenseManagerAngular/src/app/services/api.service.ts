import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Categories`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Categories`, category);
  }

  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Categories/${id}`);
  }

  getExpenses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Expenses`);
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Expenses`, expense);
  }

  updateExpense(id: number, expense: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Expenses/${id}`, expense);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Expenses/${id}`);
  }
}
