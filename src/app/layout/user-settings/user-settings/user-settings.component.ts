import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { PaginationInstance } from 'ngx-pagination';
import { SuccessMessage , TypeOfError} from 'app/shared/errorMessageConstants';
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

  public filter: String = '';
  public maxSize: Number = 7;
  public directionLinks: Boolean = true;
  public autoHide: Boolean = false;
  public responsive: Boolean = false;
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
    // loggedInuser Object webservice call
    this.loggedInUserId = {};
    this.getLoggedInUserApiCall();
  }
  private getLoggedInUserApiCall() {
    this._userService.getLoggedInUserObj().subscribe(data => {
      if (data.errorFl === true || data.warningFl === true) {
        return this.getLoggedInUserValidationAction(data);
      } else {
        const payload = this.createPayloadAndSetDefaultValues(data);
        this.setUserSettingApiCall(payload);
      }
    });
  }

  private getLoggedInUserValidationAction(data: any) {
    this.loggedInUserId = {};
    return this.alertService.warning(data.message, TypeOfError.Warning);
  }

  private createPayloadAndSetDefaultValues(data: any) {
    this.loggedInUserId = data;
    const payload = { userCode: this.loggedInUserId.userCode };
    this.userSettings = {};
    return payload;
  }

  private setUserSettingApiCall(payload: { userCode: any; }) {
    this._userService.getUserSettingsByLoggedInUser(payload).subscribe(settingData => {
      if (settingData.errorFl === true || settingData.warningFl === true) {
        this.userSettings = {};
        return this.alertService.warning(settingData.message, TypeOfError.Warning);
      }  else {
        this.userSettings = settingData;
      }
    });
  }

  saveUserSetting() {
    const payload = this.createuserSettingPayload();
    this._userService.saveUserSettings(payload).subscribe(data => {
      if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, TypeOfError.Warning);
    } else {
      return this.alertService.success(SuccessMessage.UserSetting, SuccessMessage.SuccessHeader);
     }
    });
  }
  private createuserSettingPayload() {
    return {
      user: this.loggedInUserId,
      chatNotification: this.userSettings.chatNotification,
      meetingReminder: this.userSettings.meetingReminder,
    };
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
}
}
