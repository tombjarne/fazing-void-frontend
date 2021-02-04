import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  errorMessage = '';

  constructor(public authService: AuthService) {

  }
  Login() {
    this.authService.login(this.email, this.password);
    if (!this.authService.logIn) this.errorMessage = "Login Error!";
  }

  ngOnInit() { }
}
