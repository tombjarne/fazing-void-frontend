import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from './../model/user';
import { Review } from './../model/review';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiURL = 'http://localhost:8000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }


  getUser(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getReviews(id: number): Observable<Review> {
    return this.http.get<Review>(this.apiURL + '/user/' + id + '/reviews')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  deleteReviews(id: number) {
    return this.http.delete<User>(this.apiURL + '/user/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createUser(article): Observable<User> {
    console.log(JSON.stringify(article));
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(article), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }



  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
