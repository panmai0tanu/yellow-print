import { Component } from '@angular/core';
import templateString from './third.html';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class ThirdComponent {

}
