import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  items: MenuItem[];

  constructor(private apiService: ApiService) { }

    ngOnInit() {
      this.apiService.get('api/recipe/').subscribe(res => {
        this.recipes = res;
      });

      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewRecipe(this.selectedRecipe) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteRecipe(this.selectedRecipe) },
        { label: 'Edit', icon: 'fa-edit', command: (event) => this.editRecipe(this.selectedRecipe) }
      ];
    }
      viewRecipe(select: Recipe) {
        alert('Ai accesat reteta: ' + select.title + ' cu timpul de preparare ' + select.duration);
        console.log(select);

      }
      editRecipe(select: Recipe) {
        console.log(JSON.stringify(select));

      }
      deleteRecipe(select: Recipe) {
        alert('Reteta ' + select.title + ' a fost stearsa, please refresh the page!');

        this.apiService.delete('api/recipe/' + select.id).subscribe(res => {
          console.log(res);
        });

    }
  }

export interface Recipe {
  id;
  title;
  description;
  rating;
  duration;
  difficulty;
  photo;
  videoLink;
}
