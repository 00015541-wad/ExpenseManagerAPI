
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  currentCategory = { id: null, name: '' };
  createMode = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  toggleCreateMode(): void {
    this.createMode = true;
    this.currentCategory = { id: null, name: '' };
  }

  cancelEdit(): void {
    this.createMode = false;
  }

  addOrUpdateCategory(): void {
    if (this.currentCategory.id) {
      this.apiService.updateCategory(this.currentCategory.id, this.currentCategory).subscribe(() => {
        this.loadCategories();
        this.cancelEdit();
      });
    } else {
      this.apiService.addCategory(this.currentCategory).subscribe(() => {
        this.loadCategories();
        this.cancelEdit();
      });
    }
  }

  editCategory(category: any): void {
    this.createMode = true;
    this.currentCategory = { ...category };
  }

  deleteCategory(id: number): void {
    this.apiService.deleteCategory(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
