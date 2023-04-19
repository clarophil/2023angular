import { UserService, User } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[]= []

  constructor( private userService : UserService) {}


  ngOnInit() {
    this.userService.getUserList().subscribe(
      data => {
        this.users = data
      console.log(this.users);
      }
  )
  }

}
