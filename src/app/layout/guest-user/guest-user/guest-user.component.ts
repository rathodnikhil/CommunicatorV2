import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { UserService } from '../../../services/user.service';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';

@Component({
  selector: 'app-guest-user',
  templateUrl: './guest-user.component.html',
  styleUrls: ['./guest-user.component.scss']
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
  constructor(userService: UserService) {
    this._userService = userService;
   }
   @ViewChild('guestUserSpinner') guestUserSpinnerMod: SpinnerComponent;
  ngOnInit() {
    // this.loading = true;
    this._userService.getLoggedInUserObj().subscribe(data => {
      this.loggedInUser = data;
    //  const payload = { userCode: this.loggedInUser.userCode };
    this._userService.getGuestUsersByLoggedInUser().subscribe(guestUserData => {
      this.guestUserList = guestUserData;
      this.guestUserSpinnerMod.hideSpinner();
  });
  });
  }
  onPageChange(number: number) {
    // console.log('change to page', number);
    this.config.currentPage = number;
}
}
