import { HttpClient } from '@angular/common/http';
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

  constructor( private http: HttpClient) { }

getUserList(): Observable<any> { 
  return this.http.get('http://localhost:8000/api/users');
}

}