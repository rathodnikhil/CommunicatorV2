import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {
_userService: UserService;
allAdminList = [];
  constructor(userService: UserService) { 
    this._userService = userService;
  }

  ngOnInit() {
 
  this._userService.getAllAdminList().subscribe(data => {
    if (!data.warningFl && !data.errorFl) {
        this.allAdminList = data;
    }
});

  }

}
