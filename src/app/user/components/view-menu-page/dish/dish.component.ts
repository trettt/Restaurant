import { Component, Input } from '@angular/core';
import { Dish } from 'src/app/user/interfaces/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent {
  @Input() dishData!: Dish;
  isVisible = false;

  isClicked(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
