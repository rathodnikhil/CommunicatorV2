import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-default-meeting',
  templateUrl: './default-meeting.component.html',
  styleUrls: ['./default-meeting.component.scss']
})
export class DefaultMeetingComponent implements OnInit {
   @Output() CurrentRoute = new EventEmitter();
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
  switchRoute() {
    this.CurrentRoute.emit(1);
  }

}
