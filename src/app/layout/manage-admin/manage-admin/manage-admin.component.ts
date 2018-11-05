import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { Component, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
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
selectedAdmin : any;
  constructor(userService: UserService,public alertService: AlertService) { 
    this._userService = userService;
  }
  @ViewChild('deleteMemberModal') public deleteMemberModal: CustomModalComponent;
  deleteAdminPop: CustomModalModel = {
      titleIcon: '<i class="fa fa-user"></i>',
      title: 'Delete Admin',
      smallHeading: 'You can delete admin here',
      body: '',
      Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete Admin',
      Button2Content: ''
  };

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
deleteAdmin(selectedAdmin){
this.deleteMemberModal.open();
this.selectedAdmin = selectedAdmin;
}
deleteAdminNow(){
   const payload = {'userCode': this.selectedAdmin.userCode}
  // console.log(this.selectedAdmin.userCode);
  this._userService.deleteUser(payload).subscribe(data => {
    if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, 'Warning');
    } else {
        return this.alertService.success("Admin "+data.FirstName +" " + data.lastName +"has deleted", 'Delete Admin');
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
  //close team modal popup
  closePopup(popupType) {
    switch (popupType) {
        case 'deleteAdmin':
            this.deleteMemberModal.close();
            break;
    }
}
}
