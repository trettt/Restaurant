import { Component } from '@angular/core';
import { Dish } from 'src/app/user/interfaces/dish';
import { DishService } from 'src/app/user/services/dish.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  dishes!: Dish[];

  selectedSortOption: string = 'none';

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishes = this.dishService.arrayOfDishes;
  }

  addNewItem() {}

  editItem(dish: Dish) {}

  deleteItem() {}

  get sortedItems(): any[] {
    switch (this.selectedSortOption) {
      case 'none':
        return this.dishes;
      case 'priceL-H':
        return this.dishes.slice().sort((a, b) => a.price - b.price);
      case 'priceH-L':
        return this.dishes.slice().sort((a, b) => b.price - a.price);
      case 'nameA-Z':
        return this.dishes.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'nameZ-A':
        return this.dishes.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'categoryA-Z':
        return this.dishes
          .slice()
          .sort((a, b) => a.category.localeCompare(b.category));
      case 'categoryZ-A':
        return this.dishes
          .slice()
          .sort((a, b) => b.category.localeCompare(a.category));
      case 'portionSizeL-H':
        return this.dishes
          .slice()
          .sort((a, b) => a.portionSize - b.portionSize);
      case 'portionSizeH-L':
        return this.dishes
          .slice()
          .sort((a, b) => b.portionSize - a.portionSize);
      default:
        return this.dishes;
    }
  }
}
