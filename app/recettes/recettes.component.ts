import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../model/Recette';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
  recettes: Recette[] = [];
  selectedRecipe: Recette | null = null;

  constructor(private http: HttpClient) {
    this.getRecettes();
  }

  getRecettes(): void {
    const url = 'https://script.google.com/macros/s/AKfycbwbk-GqTHP4v2R5fYT0kH51qt2ysw2R5eDbKEV8cjRkhYcEWqT1GE6Ul7bkzjRaubCsFA/exec?filtre=tous';
    this.http.get<Recette[]>(url).subscribe(recettes => {
      this.recettes = recettes;
    });
  }

  getDetails(id: number): void {
    const url = `https://script.google.com/macros/s/AKfycbwbk-GqTHP4v2R5fYT0kH51qt2ysw2R5eDbKEV8cjRkhYcEWqT1GE6Ul7bkzjRaubCsFA/exec?filtre=${id}`;
    this.http.get<Recette>(url).subscribe(recipe => {
      this.selectedRecipe = recipe;
    });
  }
}
