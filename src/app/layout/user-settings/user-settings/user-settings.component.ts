import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  providers: [UserService]
})
export class UserSettingsComponent implements OnInit {
    loggedInUserId: any ;
userSettings: any;
_userService: UserService;
  constructor(userService: UserService) {
      this._userService = userService;
   }

   ngOnInit() {
    //webservice to get profile details
  this.userSettings = {};
  const payload = {loggedInUserId: 2};
  this._userService.getUserSettingsByLoggedInUser(payload).subscribe(data => {
      this.userSettings = data.json();
  });

}
}
