import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { UserService } from '../../../services/user.service';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-guest-user',
  templateUrl: './guest-user.component.html',
  styleUrls: ['./guest-user.component.scss'],
  providers: [AlertService ]
})
export class GuestUserComponent implements OnInit {
  _userService: UserService;
  public filter: String = '';
  public maxSize: Number = 7;
  public directionLinks: Boolean = true;
  public autoHide: Boolean = false;
  public responsive: Boolean = false;
  // public loading: boolean;
  public config: PaginationInstance = {
      id: 'userCode',
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
  guestUserList = [];
  loggedInUser: any;
  searchText: string;
  // meetingYear: any;
  // meetingMonth: any;
  prevYear: any;
  prevMonth: any;
  constructor(userService: UserService, public alertService: AlertService) {
    this._userService = userService;
   }
   @ViewChild('guestUserSpinner') guestUserSpinnerMod: SpinnerComponent;
  // ngOnInit() {
  //   // this.loading = true;
  //   this._userService.getLoggedInUserObj().subscribe(data => {
  //     this.loggedInUser = data;
  //   //  const payload = { userCode: this.loggedInUser.userCode };
  //   this._userService.getGuestUsersByLoggedInUser().subscribe(guestUserData => {
  //     this.guestUserList = guestUserData;
  //     this.guestUserSpinnerMod.hideSpinner();
  // });
  // });
  // }

  ngOnInit() {
    // loggedInUser Object webservice call
    this._userService.getLoggedInUserObj().subscribe(data => {
        if (data.errorFl === true || data.warningFl === true) {
            this.guestUserSpinnerMod.hideSpinner();
            return this.alertService.warning(data.message, 'Warning');
        } else {
            this.loggedInUser = data;
            // this.meetingYear = new Date().getFullYear();
            // this.meetingMonth = new Date().getUTCMonth() + 1;
            this.loadMore(new Date().getFullYear(), new Date().getUTCMonth() + 1);
        }
    });
}

loadMore(year, month) {
  const payload = { year: year, month: month };
  this.guestUserSpinnerMod.showSpinner();
  this._userService.getGuestUsersByLoggedInUser(payload).subscribe(data => {
      if (month === 0) {
          this.prevYear = year - 1;
          this.prevMonth = 12;
      } else {
        this.prevYear = year;
        this.prevMonth = month - 1;
      }

      if (data[0].errorFl || data[0].warningFl) {
          this.alertService.warning(data[0].message, 'Warning');
      } else {
          this.guestUserList = this.guestUserList.concat(data);
      }
      this.guestUserSpinnerMod.hideSpinner();
  });
}

  onPageChange(number: number) {
    this.config.currentPage = number;
  }
}
