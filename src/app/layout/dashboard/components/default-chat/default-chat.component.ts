import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-default-chat',
  templateUrl: './default-chat.component.html',
  styleUrls: ['./default-chat.component.scss']
})
export class DefaultChatComponent implements OnInit {

    loggedInUser: any;
    _userService: UserService;
    constructor(userService: UserService) {
        this._userService = userService;
     }
  ngOnInit() {
    const payload = {loggedInUserId: 2};
    this._userService.getLoggedInUSerDetails(payload).subscribe(data => {
        this.loggedInUser = data.json();
    });
  }

}
