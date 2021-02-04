import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser;

  constructor(private restApi: UserServiceService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.restApi.getUser().subscribe((data: {}) => {
      this.currentUser = data;
    });
  }

}
