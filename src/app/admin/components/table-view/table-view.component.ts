import { Component } from '@angular/core';
import { Dish } from 'src/app/user/interfaces/dish';
import { DishService } from 'src/app/user/services/dish.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  dishes!:Dish[];

  constructor(private dishService:DishService){}

  ngOnInit(): void {
    this.dishes=this.dishService.arrayOfDishes;
  }

  addNewItem(){
  }

  editItem(dish: Dish) {
  }

  deleteItem(){
  }
}
