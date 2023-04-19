import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class User {
  'username': string;
  'password': string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:8000/api/'

  constructor( private http: HttpClient) { }

  // Sans token
  getUserList(): Observable<any> { 
    return this.http.get(this.baseUrl + 'users');
  }

  // Avec token
  getProtectedUserList(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'protected/users', { "headers": headers });
  }

  login(): Observable<any> {
    return this.http.post(this.baseUrl + 'login', {
      "username": "root",
      "password": "root"
    });
  }
}