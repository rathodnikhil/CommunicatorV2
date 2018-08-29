import { Component, OnInit ,ViewChild} from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { PaginationInstance } from 'ngx-pagination';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.scss']
})
export class ManageGroupComponent implements OnInit {

    // public filter: string = '';
    // public maxSize: number = 7;
    // public directionLinks: boolean = true;
    // public autoHide: boolean = false;
    // public responsive: boolean = false;
    // public config: PaginationInstance = {
    //     id: 'userCode',
    //     itemsPerPage: 2,
    //     currentPage: 1
    // };
    // public labels: any = {
    //     previousLabel: 'Previous',
    //     nextLabel: 'Next',
    //     screenReaderPaginationLabel: 'Pagination',
    //     screenReaderPageLabel: 'page',
    //     screenReaderCurrentLabel: `You're on page`
    // };
  _groupService: GroupService;
  _userService: UserService;
  disabled = false;  
  limitSelection = false;
  cities: any[];
  selectedItems: any[];
  dropdownSettings: any = {};
  createGroupsVal = '';
  showtypeMessage = false;
  showNewGroup = false;
  showAddGroupSuccess = false;
  duplicateGroup = false;
  showGroupNameUiFlag: boolean;
  groupList = [];
  groupArray = [];
  loggedInUserObj: any;
  selectedGroupObj: any;
  groupMemberCount: any;
  groupMemberObjList = [];
  showSelectedGroup: boolean;
  countFlag: boolean;
  selectedGroupUsers: any[];
  userList: any[];
  showSelectGroupNameFlag: boolean;
  showSelectmember: boolean;
  constructor(groupService: GroupService , userService: UserService) {
    this._groupService = groupService;
    this._userService = userService;
   }

  ngOnInit() {
  
    this.showGroupNameUiFlag = false;
    this.countFlag = false;
    this.showSelectGroupNameFlag = false;
    this.showSelectedGroup = false;
    this.showSelectmember =  false;
    this._userService.getLoggedInUserObj().subscribe(data => {     
      this.loggedInUserObj = data;     
      const payload = { userCode:  this.loggedInUserObj.userCode};
      this._groupService.setGroupList(payload);
      this._groupService.getGroupList().subscribe(data => {            
          this.groupList = data;  
       });
       this._groupService.setGroupListObjByLoggedInUserId(payload);
       this._groupService.getGroupListObjByLoggedInUserId().subscribe(data => {            
           this.groupMemberObjList = data;  
       });
   });
  
 // this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];
  this.selectedItems = [];
  this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
  };
  }
  onItemSelect(item: any) {
   this.selectedItems.push(item);
  }
  onSelectAll(items: any) {
    this.selectedItems.push(items);
  }
  

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
  }
 
  showGroupName(){
    this.showGroupNameUiFlag = !this.showGroupNameUiFlag;
  }
    //create new group
    addGroup(createGroupsVal) {
      if (createGroupsVal === "" || createGroupsVal === null || typeof createGroupsVal === "undefined") {
          this.showNewGroup = true;
          setTimeout(function () {
              this.showNewGroup = false;
          }.bind(this), 5000);
      } else {

          for (let i in this.groupList) {
              this.groupArray.push(this.groupList[i].groupId.groupName);
          }
          var duplicateGroupFlag = this.groupArray.indexOf(createGroupsVal);
          if (duplicateGroupFlag != -1) {
              this.duplicateGroup = true;
              setTimeout(function () {
                  this.duplicateGroup = false;
              }.bind(this), 6000);
          } else {
              const payload = { "groupName": createGroupsVal , "user": this.loggedInUserObj}
              this._groupService.saveGroupDetails(payload).subscribe(res => {
                  this.showNewGroup = false;
                  this.showAddGroupSuccess = true;
                  setTimeout(function () {
                      this.showNewGroupSuccess = false;
                  }.bind(this), 5000);
                  const group = { group: { groupName: createGroupsVal } };
                  this.groupList.push(group);
                  this.createGroupsVal = ' ';
              });
          }
      }

  }
  // get details for selected group
  displayGroupDetails(groupId){
    // this._userService.getUserList().subscribe(data => {            
    //     this.userList = data;            
    // });
    this.showSelectedGroup = true;
    this.selectedGroupObj = groupId;
    const payload = {userCode: this.loggedInUserObj.userCode}
    this._groupService.getGroupMembersByGroup(payload).subscribe(data => {            
    this.groupMemberObjList = data;
    this.selectedGroupUsers = [];
    for (let i in this.groupMemberObjList) {
        if(this.groupMemberObjList[i].groupId.groupId === groupId.groupId){
            this.selectedGroupUsers.push(this.groupMemberObjList[i].userId);
        }
    }
    this.groupMemberCount = this.selectedGroupUsers.length;
    if(this.groupMemberCount != 0){
        this.countFlag = true;
      }  
});
  }

  // add new member in group
  addMember() {
      if(this.showSelectedGroup === false){
        this.showSelectGroupNameFlag = true;
        setTimeout(function () {
            this.showSelectGroupNameFlag = false;
        }.bind(this), 5000);
      }else{
          if( this.selectedItems.length === 0){
            this.showSelectmember = true;
            setTimeout(function () {
                this.showSelectmember = false;
            }.bind(this), 5000);
          }
      }
      const payload = {groupMemObjList: this.selectedItems , groupId: this.selectedGroupObj.groupId}
    this._groupService.saveGroupMember(payload).subscribe(res => {
        this.userList = res;
        for (let i in this.userList) {
                this.selectedGroupUsers.push(this.userList[i]);
        }
        this.selectedGroupUsers = this.removeDuplicateUsingSet(this.selectedGroupUsers);
        console.log(this.removeDuplicateUsingSet(this.selectedGroupUsers));
    });
    this.selectedItems = [];
}
// onPageChange(number: number) {
//     // console.log('change to page', number);
//     this.config.currentPage = number;
// }
 
 removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}



}
