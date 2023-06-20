import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  welcomeMessage:string="Welcome to the Culinary Control Center!";
  imgSrc: string = "src\\assets\\images\\RecipeBook.png";

  constructor(private router:Router){};

  navigateToUserSignUp():void{
    this.router.navigate(['user','sign-up']);
  }

  navigateToUserLogIn():void{
    this.router.navigate(['user','login']);
  }
}
