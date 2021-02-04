import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:8000';
  token;

  ttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(public http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.uri + '/auth/login', { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);
      })
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  public userToken(): string {
    return localStorage.getItem('auth_token');
  }

}
