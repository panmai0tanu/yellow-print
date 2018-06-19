import { Component } from '@angular/core';
import templateString from './third.html';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class ThirdComponent {
  user: any;
  users: any[];
  usersColumns: any[] = [
    { prop: 'email' },
    { prop: 'role' }
  ];

  constructor(private userService: UserService) {
    this.userService.all().subscribe((users: any[]) => {
      this.users = users;
    });
    this.userService.find(1).subscribe((user: object) => {
      this.user = user;
    });
  }
}
