import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

appTitle: string = 'FazingVoid'; 

constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }
}
