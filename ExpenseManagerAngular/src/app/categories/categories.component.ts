import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  newCategory = { name: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addCategory(): void {
    this.apiService.addCategory(this.newCategory).subscribe(() => {
      this.loadCategories();
      this.newCategory.name = '';
    });
  }

  deleteCategory(id: number): void {
    this.apiService.deleteCategory(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
