import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-menu-header',
  templateUrl: './view-menu-header.component.html',
  styleUrls: ['./view-menu-header.component.scss'],
})
export class ViewMenuHeaderComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';

  constructor(private router: Router) {}

  navigateToRoute() {
    sessionStorage.removeItem('userToken');
    localStorage.removeItem('userToken');
    this.router.navigate(['user', 'login']);
  }
}
