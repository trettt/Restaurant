import { Component } from '@angular/core';
import { Dish } from '../../interfaces/dish';
import { DishService } from '../../../services/dish.service';

@Component({
  selector: 'app-view-menu-page',
  templateUrl: './view-menu-page.component.html',
  styleUrls: ['./view-menu-page.component.scss'],
})
export class ViewMenuPageComponent {
  title: string = '~MENU~';
  dishes: Dish[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishes = this.dishService.arrayOfDishes;
  }
}
