import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { PaginationInstance } from 'ngx-pagination';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  providers: [AlertService]
})
export class UserSettingsComponent implements OnInit {
  _userService: UserService;
  loggedInUserId: any;
  userSettings: any;
  user: any;

  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = false;
  public config: PaginationInstance = {
      id: 'meetingCode',
      itemsPerPage: 10,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  constructor(userService: UserService , public alertService: AlertService) {
    this._userService = userService;
  }

  ngOnInit() {
    //loggedInuser Object webservice call
    this.loggedInUserId = {};
    this._userService.getLoggedInUserObj().subscribe(data => {
      if(data.errorFl === true || data.warningFl === true){
        this.loggedInUserId = {};
        return this.alertService.warning(data.message, "Warning"); 
    }else{
      this.loggedInUserId = data;
      const payload = { userCode: this.loggedInUserId.userCode };
      this.userSettings = {};
      this._userService.getUserSettingsByLoggedInUser(payload).subscribe(data => {
        if(data.errorFl === true || data.warningFl === true){
          this.userSettings = {};
          return this.alertService.warning(data.message, "Warning"); 
      }else{
        this.userSettings = data;
       }
      });
    }
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
     // downloadLocation: this.userSettings.downloadLocation
    };
    this._userService.saveUserSettings(payload).subscribe(data => {
      if(data.errorFl === true || data.warningFl === true){
        return this.alertService.warning(data.message, "Warning"); 
    }else{
      return this.alertService.success('User settings has been updated successfully', "Success"); 
     }
    });
  }
  onPageChange(number: number) {
    this.config.currentPage = number;
}
}
