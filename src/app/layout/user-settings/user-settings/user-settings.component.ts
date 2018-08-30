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
meetingReminder: boolean;
chatNotification: boolean;
user : any;
downloadLocation: any;
profileImgPath: any;
  constructor(userService: UserService) {
      this._userService = userService;
   }

   ngOnInit() {
      //loggedInuser Object webservice call
      this.loggedInUserId = {};
      this._userService.getLoggedInUserObj().subscribe(data => {
        this.loggedInUserId = data;
        const payload = { userCode : this.loggedInUserId.userCode};
        this.userSettings = {};
  this._userService.getUserSettingsByLoggedInUser(payload).subscribe(data => {
      this.userSettings = data;
  });
    });
}
saveUserSetting(){
  const payload = {
    displayName: this.loggedInUserId.firstName + this.loggedInUserId.lastName,
    meetingCode:  this.displayName,
    user: this.loggedInUserId,
    profileImgPath: this.profileImgPath,
    chatNotification: this.chatNotification,
    meetingReminder: this.meetingReminder,
    downloadLocation: this.downloadLocation
  };
  this._userService.  saveUserSettings(payload).subscribe(data => {  
});
}
meetingReminderChk(){
    this.meetingReminder = !this.meetingReminder;
}
chatNotifictaionChk(){
  this.chatNotification = !this.chatNotification;
}
}
