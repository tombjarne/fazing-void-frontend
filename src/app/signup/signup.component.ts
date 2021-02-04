import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './../services/user-service.service';
import { User } from './../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: User;

  constructor(public restApi: UserServiceService, public router: Router,) { }

  ngOnInit() {
    this.user = new User();
  }

  addUser() {
    this.restApi.createUser(this.user).subscribe(data => {
      this.router.navigate(['/login'])
    });
  }

}
