import { Injectable } from '@angular/core';
import * as constants from './../utils/constants';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Subject} from "rxjs/internal/Subject";


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string) {
    localStorage.removeItem(constants.TOKEN_KEY);
    localStorage.setItem(constants.TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(constants.TOKEN_KEY);
  }

  public saveUser(user) {
    localStorage.removeItem(constants.USER_KEY);
    localStorage.setItem(constants.USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(constants.USER_KEY));
  }

}
