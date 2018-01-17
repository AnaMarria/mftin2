import { Component, OnInit, NgModule } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ButtonModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/components/rating/rating';
import { DialogModule } from 'primeng/components/dialog/dialog';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less'],
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  items: MenuItem[];
  newRecipe: Recipe = new Recipe('', '', 0, 0, 0, '');
  display: boolean;
  edit: boolean;
  add: boolean;

  constructor(private apiService: ApiService) {
    this.display = false;
    this.edit = false;
    this.add = false;
  }

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
    onAdd() {
      if ( this.add === true ) {
        this.apiService.post('api/recipe', this.newRecipe).subscribe();
      } else {
        console.log(JSON.stringify(this.newRecipe));
      }
      this.display = false;
      this.add = false;
      this.edit = false;
      this.newRecipe = new Recipe('', '', 0, 0, 0, '');
    }

    showDialog() {
      this.display = true;
      this.add = true;
    }
    showEdit() {
    this.edit = true;
    this.display = true;
    this.newRecipe = this.selectedRecipe;
    }

  }

class Recipe {
  id: number;
  title: string;
  description: string;
  rating: number;
  duration: number;
  difficulty: number;
  photo;
  videoLink: string;
  constructor(title?: string, description?: string, rating?: number, duaration?: number, difficutly?: number, link?: string) {
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.duration = duaration;
    this.difficulty = difficutly;
    this.videoLink = link;
  }
}
