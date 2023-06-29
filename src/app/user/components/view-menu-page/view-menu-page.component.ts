import { Component } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-view-menu-page',
  templateUrl: './view-menu-page.component.html',
  styleUrls: ['./view-menu-page.component.scss'],
})
export class ViewMenuPageComponent {
  title: string = '~MENU~';

  recipes!: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((response) => {
      this.recipes = response;
      console.log(this.recipes);
    });
  }
}
