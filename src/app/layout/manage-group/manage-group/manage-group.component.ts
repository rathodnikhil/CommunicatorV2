import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';

@Component({
    selector: 'app-manage-group',
    templateUrl: './manage-group.component.html',
    styleUrls: ['./manage-group.component.scss'],
    providers: [AlertService]
})
export class ManageGroupComponent implements OnInit {
    public searchText: string;
    public filter = '';
    public maxSize = 7;
    public directionLinks = true;
    public autoHide = false;
    public responsive = false;
    public newGroupName : any;
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
    _groupService: GroupService;
    _userService: UserService;
    disabled = false;
    limitSelection = false;
    cities: any[];
    selectedItems: any[];
    dropdownSettings: any = {};
    createGroupsVal = '';
    showtypeMessage = false;
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
    showNewGroup: boolean;
    searchGroupName: any;
    searchGroup: any;
    searchTextTable: any;
    @ViewChild('groupNameTxt') groupNameTxt: ElementRef;
    @ViewChild('addNewGroupModal') public addNewGroupModal: CustomModalComponent;
    newGroup: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Group',
        smallHeading: 'You can add new group details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Group',
        Button2Content: ''
    };

    constructor(groupService: GroupService, userService: UserService, public alertService: AlertService) {
        this._groupService = groupService;
        this._userService = userService;
    }

    ngOnInit() {
        this.showGroupNameUiFlag = false;
        this.countFlag = false;
        this.showSelectedGroup = false;
        this.newGroupName = '';
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                const payload = { userCode: this.loggedInUserObj.userCode };
                this._groupService.setGroupList(payload);
                this._userService.setUserList(payload);
                this._groupService.setGroupListObjByLoggedInUserId(payload);
                this._userService.setUserList(payload);
                this._groupService.getGroupList().subscribe(groupData => {
                    if (groupData.errorFl === true || groupData.warningFl === true) {
                        this.groupList = [];
                        return this.alertService.warning(groupData.message, 'Warning');
                    } else {
                         this.groupList = groupData;
                    }
                });
            }
        });
        this._groupService.getGroupListObjByLoggedInUserId().subscribe(data => {
            this.groupMemberObjList = data;
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

    showGroupName() {
        this.showGroupNameUiFlag = !this.showGroupNameUiFlag;
        this.showNewGroup = !this.showNewGroup;
    }
    // create new group
    // addGroup(createGroupsVal) {
    //     if (createGroupsVal === '' || createGroupsVal === null || typeof createGroupsVal === 'undefined') {
    //         return this.alertService.warning('Please enter group name', 'Warning');
    //     } else {
    //         for (const i in this.groupList) {
    //             this.groupArray.push(this.groupList[i].groupId.groupName);
    //         }
    //         const duplicateGroupFlag = this.groupArray.indexOf(createGroupsVal);
    //         if (duplicateGroupFlag !== -1) {
    //             return this.alertService.warning('Group name already exist', 'Warning');
    //         } else {
    //             const payload = { 'groupName': createGroupsVal, 'user': this.loggedInUserObj }
    //             this._groupService.saveGroupDetails(payload).subscribe(res => {
    //                 const newGroup = { groupId: res };
    //                 this.groupList.push(newGroup);
    //                 this.groupNameTxt.nativeElement.value = '';
    //                 return this.alertService.success('Group has been added successfully', 'Success');
    //             });
    //         }
    //     }
    // }

    addGroup() {
        if ( this.newGroupName === null || typeof this.newGroupName === 'undefined' || this.newGroupName.trim() === '') {
            return this.alertService.warning('Please Enter Group Name', 'Warning');
        } else {
            // const payload = { 'groupName': this.newGroupName , 'userCode': this.loggedInUserObj.userCode };
            const payload = { 'groupName': this.newGroupName , 'user': this.loggedInUserObj };
            const group = { group: { groupName: this.newGroupName  , status: {status: 'ACTIVE'}} };
            this._groupService.saveGroupDetails(payload).subscribe(
                (res) => {
                    if (res.errorFl === true || res.warningFl === true) {
                        this.newGroupName = '';
                        return this.alertService.warning(res.message, 'Warning');
                    } else {
                    this.groupList.push(group);
                    this.newGroupName = '';
                    this.groupNameTxt.nativeElement.focus();
                    this.selectedGroupObj = res.team;
                   return this.alertService.success('Group has been added successfully', 'Success');
                    }
                });
            }
    }
    // get details for selected group
    displayGroupDetails(groupId) {
        // this._userService.getUserList().subscribe(data => {
        //     this.userList = data;
        // });
        this.showSelectedGroup = true;
        this.selectedGroupObj = groupId;
        const payload = { userCode: this.loggedInUserObj.userCode };
        this._groupService.getGroupMembersByGroup(payload).subscribe(data => {
            const groupMemberList = data;
            this.selectedGroupUsers = [];
            for (const i in groupMemberList) {
                if (groupMemberList[i].groupId.groupId === groupId.groupId) {
                    this.selectedGroupUsers.push(groupMemberList[i].userId);
                }
            }
            this.groupMemberCount = this.selectedGroupUsers.length;
            if (this.groupMemberCount !== 0) {
                this.countFlag = true;
            }
        });
    }
    // to open group popup
    openGroup() {
        this.addNewGroupModal.open();
    }

    // add new member in group
    addMember() {
        if (this.showSelectedGroup === false) {
            return this.alertService.warning('Please select group', 'Warning');
        } else if (this.selectedItems.length === 0) {
            return this.alertService.warning('Please select member', 'Warning');
        } else if (this.selectedItems.length > 0 && this.selectedGroupUsers.length > 0) {
            const selectedGroupUserCodes = this.selectedGroupUsers.map(x => x.userCode);
            const selectedItemsItemId = this.selectedItems.map(x => x.item_id);
            for (let i = 0; i < selectedGroupUserCodes.length; i++) {
                if (selectedItemsItemId.indexOf(selectedGroupUserCodes[i])) {
                    this.selectedItems = [];
                    return false;
                }
            }
            return this.alertService.warning('Member already exist', 'Warning');
        }
        const payload = { groupMemObjList: this.selectedItems, groupId: this.selectedGroupObj.groupId }
        this._groupService.saveGroupMember(payload).subscribe(res => {
            this.userList = res;
            for (const i in this.userList) {
                if (this.selectedGroupUsers.indexOf(this.userList[i]) === -1) {
                    this.selectedGroupUsers.push(this.userList[i]);
                }
            }
            this.selectedItems = [];
        });
    }
    onPageChange(number: number) {
        this.config.currentPage = number;
    }

    // close team modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'addNewGroup':
                this.addNewGroupModal.close();
                break;
            // case 'addNewMember':
            //     this.addNewMemberModal.close();
            //     this.clearMemPopupField();
            //     break;
            // case 'updateTeam':
            //     this.addUpdateTeamModal.close();
            //     break;
            // case 'deleteTeam':
            //     this.addUpdateTeamModal.close();
            //     break;
        }
    }
}
