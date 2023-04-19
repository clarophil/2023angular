import { Component } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  users : User[] = []
  
  constructor(private userService: UserService) { }

  login() {
    this.userService.login().subscribe(
      data => localStorage.setItem('token', data.token)
    )
  }

  getProtectedUserList() {
    this.userService.getProtectedUserList().subscribe(
      users => this.users = users
    )
  }
}
