import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(BACKEND_URL + 'test/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(BACKEND_URL + 'test/user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(BACKEND_URL + 'test/admin', { responseType: 'text' });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(BACKEND_URL + 'users');
  }

}
