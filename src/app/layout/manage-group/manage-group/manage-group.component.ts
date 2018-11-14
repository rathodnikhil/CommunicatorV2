import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
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
    searchTextTable: any;
    @ViewChild("groupNameTxt") groupNameTxt: ElementRef;
    constructor(groupService: GroupService, userService: UserService, public alertService: AlertService) {
        this._groupService = groupService;
        this._userService = userService;
    }

    ngOnInit() {
        this.showGroupNameUiFlag = false;
        this.countFlag = false;
        this.showSelectedGroup = false;
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
                this._groupService.getGroupList().subscribe(data => {
                    if(data[0].errorFl || data[0].warningFl){
                        this.groupList = [];
                        return this.alertService.warning(data[0].message, 'Warning');
                    } else{
                    this.groupList = data;
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
    addGroup(createGroupsVal) {
        if (createGroupsVal === '' || createGroupsVal === null || typeof createGroupsVal === 'undefined') {
            return this.alertService.warning('Please enter group name', 'Warning');
        } else {
            for (const i in this.groupList) {
                this.groupArray.push(this.groupList[i].groupId.groupName);
            }
            const duplicateGroupFlag = this.groupArray.indexOf(createGroupsVal);
            if (duplicateGroupFlag !== -1) {
                return this.alertService.warning('Group name already exist', 'Warning');
            } else {
                const payload = { 'groupName': createGroupsVal, 'user': this.loggedInUserObj }
                this._groupService.saveGroupDetails(payload).subscribe(res => {
                    const newGroup = { groupId: res };
                    this.groupList.push(newGroup);
                    this.groupNameTxt.nativeElement.value = '';
                    return this.alertService.success('Group has been added successfully', 'Success');
                });
            }
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
}
