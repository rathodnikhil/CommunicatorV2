import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { UserService } from '../../../services/user.service';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { AlertService } from '../../../services/alert.service';
import { TypeOfError } from '../../../shared/errorMessageConstants';

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
  prevYear: any;
  prevMonth: any;
  constructor(userService: UserService, public alertService: AlertService) {
    this._userService = userService;
   }
   @ViewChild('guestUserSpinner') guestUserSpinnerMod: SpinnerComponent;

  ngOnInit() {
    // loggedInUser Object webservice call
    this.loggedInUserIdApiCall();
}

  private loggedInUserIdApiCall() {
    this._userService.getLoggedInUserObj().subscribe(data => {
      if (data.errorFl === true || data.warningFl === true) {
        this.guestUserSpinnerMod.hideSpinner();
        return this.alertService.warning(data.message, TypeOfError.Warning);
      } else {
        this.loggedInUser = data;
        this.loadMore(new Date().getFullYear(), new Date().getUTCMonth() + 1);
      }
    });
  }

loadMore(year, month) {
  const payload = { year: year, month: month };
  this.guestUserSpinnerMod.showSpinner();
  this.guestuserApiCall(payload, month, year);
}

  private guestuserApiCall(payload: { year: any; month: any; }, month: any, year: any) {
    this._userService.getGuestUsersByLoggedInUser(payload).subscribe(data => {
      this.setMonThAndYear(month, year);
      if (data[0].errorFl || data[0].warningFl) {
        this.alertService.warning(data[0].message, TypeOfError.Warning);
      }  else {
        this.guestUserList = this.guestUserList.concat(data);
      }
      this.guestUserSpinnerMod.hideSpinner();
    });
  }

  private setMonThAndYear(month: any, year: any) {
    if (month === 0) {
      this.prevYear = year - 1;
      this.prevMonth = 12;
    }  else {
      this.prevYear = year;
      this.prevMonth = month - 1;
    }
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }
}
