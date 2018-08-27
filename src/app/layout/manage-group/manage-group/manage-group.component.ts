import { Component, OnInit ,ViewChild} from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.scss']
})
export class ManageGroupComponent implements OnInit {
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
  constructor(groupService: GroupService , userService: UserService) {
    this._groupService = groupService;
    this._userService = userService;
   }

  ngOnInit() {
  
    this.showGroupNameUiFlag = false;
    this.countFlag = false;
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
  displayGroupDetails(groupId){
    this.showSelectedGroup = true;
    this.selectedGroupObj = groupId;
   const payload = {userCode : this.loggedInUserObj.userCode};
    this._groupService.getTotalGroupByLoggedInUserId(payload).subscribe(data => {
        this.groupMemberCount = data;
      if(this.groupMemberCount != 0){
        this.countFlag = true;
      }
    });
  }
  addMember() {
      const payload = {groupMemObjList: this.selectedItems , groupId: this.selectedGroupObj.groupId}
    this._groupService.saveGroupMember(payload).subscribe(res => {
        this.selectedItems = [];
    });
}
}
