import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { map } from 'rxjs/operators';

import * as constants from "../utils/constants";

const BACKEND_URL = environment.apiUrl + 'auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem(constants.USER_KEY)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(credentials): Observable<any> {
    return this.http.post(BACKEND_URL + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions).pipe(map(value => {
      // login successful if there's a jwt token in the response
      if (value) {
        this.currentUserSubject.next(value);
      }
      return value;
    }));
  }

  register(user): Observable<any> {
    return this.http.post(BACKEND_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    }, httpOptions);
  }

  logout() {
    this.currentUserSubject.next(null);
    // remove user from local storage to log user out
    localStorage.removeItem(constants.TOKEN_KEY);
    localStorage.removeItem(constants.USER_KEY);
  }

}
