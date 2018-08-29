import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
_userService: UserService;
loggedInUserId: any ;
userSettings: any;
displayName: any;
  constructor(userService: UserService) {
      this._userService = userService;
   }

   ngOnInit() {
      //loggedInuser Object webservice call
      this.loggedInUserId = {};
      this._userService.getLoggedInUserObj().subscribe(data => {
        this.loggedInUserId = data;
        const payload = {
          fullName: this.loggedInUserId.firstName + this.loggedInUserId.lastName,
          meetingCode:  this.displayName
        };
  this._userService.getUserSettingsByLoggedInUser(payload).subscribe(data => {
      this.userSettings = data;
  });
    });

    //webservice to get profile details
  this.userSettings = {};
  

}
}
