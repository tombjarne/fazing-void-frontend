import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Article } from './../model/article';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  apiURL = 'http://localhost:8000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }


  getArticles(): Observable<Article> {
    return this.http.get<Article>(this.apiURL + '/article')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  /* getComments(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.apiURL + '/article/' + id + '/comments')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  } */


  deleteArticle(id: number) {
    return this.http.delete<Article>(this.apiURL + '/article/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createArticle(article): Observable<Article> {
    console.log(JSON.stringify(article));
    return this.http.post<Article>(this.apiURL + '/article', JSON.stringify(article), this.httpOptions)
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
