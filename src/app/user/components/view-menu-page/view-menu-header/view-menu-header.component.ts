import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-view-menu-header',
  templateUrl: './view-menu-header.component.html',
  styleUrls: ['./view-menu-header.component.scss'],
})
export class ViewMenuHeaderComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getUserData().subscribe(
        (response) => {
          console.log(response);
          this.firstName = response.firstName;
          this.lastName = response.lastName; 
        },
        (error) => {
          console.error(error);
        }
    );
  }

  navigateToRoute() {
    sessionStorage.removeItem('userToken');
    localStorage.removeItem('userToken');
    this.router.navigate(['user', 'login']);
  }
}
