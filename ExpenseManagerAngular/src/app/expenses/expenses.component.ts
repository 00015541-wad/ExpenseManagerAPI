import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: any[] = [];
  newExpense = { title: '', amount: 0, categoryId: 0 };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.apiService.getExpenses().subscribe(data => {
      this.expenses = data;
    });
  }

  addExpense(): void {
    this.apiService.addExpense(this.newExpense).subscribe(() => {
      this.loadExpenses();
      this.newExpense = { title: '', amount: 0, categoryId: 0 };
    });
  }

  deleteExpense(id: number): void {
    this.apiService.deleteExpense(id).subscribe(() => {
      this.loadExpenses();
    });
  }
}
