import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/loginResponse';
import { LoginRequest } from '../models/loginRequest';
import { environment, SERVER_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any> {
    
    const url = `${SERVER_URL}/login`;
    var response = this.http.post<LoginResponse>(url, JSON.stringify(loginRequest), this.httpHeader)
      .pipe(
        //catchError(this.handleError<LoginResponse>('login error'))
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return of (err);
         })
      );

    //console.log(response);

    return response;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.log("Mensagem:" +error.message);
      //console.error(error.error.message);
      //console.log(`${operation} failed: ${error.message}`);
      var response: any = { success: false, message : error.error.message, user: null, token: null };
      
      return of(response as T);
    };
  }
  /*
    logout() {
      return this.http.post(this.url).toPromise();
    }
  
    getUser(id) {
      return this.http.get(this.url + id).toPromise();
    }
    */
}