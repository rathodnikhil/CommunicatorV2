import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  _userService: UserService;
  loggedInUserId: any;
  userSettings: any;
  user: any;
  constructor(userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    //loggedInuser Object webservice call
    this.loggedInUserId = {};
    this._userService.getLoggedInUserObj().subscribe(data => {
      this.loggedInUserId = data;
      const payload = { userCode: this.loggedInUserId.userCode };
      this.userSettings = {};
      this._userService.getUserSettingsByLoggedInUser(payload).subscribe(data => {
        this.userSettings = data;
      });
    });
  }
  saveUserSetting() {
    const payload = {
      displayName: this.userSettings.displayName,
      meetingCode: this.userSettings.meetingCode,
      user: this.loggedInUserId,
      profileImgPath: this.userSettings.profileImgPath,
      chatNotification: this.userSettings.chatNotification,
      meetingReminder: this.userSettings.meetingReminder,
      downloadLocation: this.userSettings.downloadLocation
    };
    this._userService.saveUserSettings(payload).subscribe(data => {
    });
  }
}
