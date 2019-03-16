import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { UserService } from '../../../services/user.service';

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

  ngOnInit() {
    this._userService.getLoggedInUserObj().subscribe(data => {
      this.loggedInUser = data;
      const payload = { userCode: this.loggedInUser.userCode };
    this._userService.getGuestUsersByLoggedInUser(payload).subscribe(guestUserData => {
      this.guestUserList = guestUserData;
  });
  });
  }
  onPageChange(number: number) {
    // console.log('change to page', number);
    this.config.currentPage = number;
}
}
