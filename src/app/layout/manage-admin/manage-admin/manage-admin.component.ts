import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss'],
  providers: [AlertService]
})
export class ManageAdminComponent implements OnInit {
_userService: UserService;
searchText: any;
public filter: string = '';
public maxSize: number = 7;
public directionLinks: boolean = true;
public autoHide: boolean = false;
public responsive: boolean = false;
public config: PaginationInstance = {
    id: 'usersCode',
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
allAdminList = [];
  constructor(userService: UserService,public alertService: AlertService) { 
    this._userService = userService;
  }

  ngOnInit() {
 
  this._userService.getAllAdminList().subscribe(data => {
    if (!data.warningFl && !data.errorFl) {
        this.allAdminList = data;
    }
});

  }
  onPageChange(number: number) {
    // console.log('change to page', number);
    this.config.currentPage = number;
}
deleteAdmin(user){
  this._userService.deleteUser(user).subscribe(data => {
    if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, 'Warning');
    } else {
    }
});
}
editAdmin(user){
  this._userService.getLoggedInUserObj().subscribe(data => {

    if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, 'Warning');
    } else {
    }
});
}
}
