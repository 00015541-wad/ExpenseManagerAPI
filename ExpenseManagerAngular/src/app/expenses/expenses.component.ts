import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-expenses',
  standalone: false,
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: any[] = [];
  categories: any[] = [];
  currentExpense = { id: null, title: '', amount: 0, description: '', categoryId: null };
  createMode = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadExpenses();
    this.loadCategories();
  }

  loadExpenses(): void {
    this.apiService.getExpenses().subscribe(data => {
      this.expenses = data;
    });
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  toggleCreateMode(): void {
    this.createMode = true;
    this.currentExpense = { id: null, title: '', amount: 0, description: '', categoryId: null };
  }

  cancelEdit(): void {
    this.createMode = false;
  }

  addOrUpdateExpense(): void {
    if (this.currentExpense.id) {
      this.apiService.updateExpense(this.currentExpense.id, this.currentExpense).subscribe(() => {
        this.loadExpenses();
        this.cancelEdit();
      });
    } else {
      this.apiService.addExpense(this.currentExpense).subscribe(() => {
        this.loadExpenses();
        this.cancelEdit();
      });
    }
  }

  editExpense(expense: any): void {
    this.createMode = true;
    this.currentExpense = { ...expense };
  }

  deleteExpense(id: number): void {
    this.apiService.deleteExpense(id).subscribe(() => {
      this.loadExpenses();
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
