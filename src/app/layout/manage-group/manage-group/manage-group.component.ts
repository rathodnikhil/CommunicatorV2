import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { PasswordService } from '../../../services/password.service';

@Component({
    selector: 'app-manage-group',
    templateUrl: './manage-group.component.html',
    styleUrls: ['./manage-group.component.scss'],
    providers: [AlertService, PasswordService]
})
export class ManageGroupComponent implements OnInit {
    public searchText: string;
    public filter = '';
    public maxSize = 7;
    public directionLinks = true;
    public autoHide = false;
    public responsive = false;
    public newGroupName: any;
    i: number;
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
    selectedNewGroupObj: any;
    selectedGroupName: any;
    selectedGroupObjFromList: any;
    groupMemberCount: any;
    groupMemberObjList = [];
    showSelectedGroup: boolean;
    countFlag: boolean;
    selectedGroupUsers: any[];
    userList: any[];
    filterMemberList = [];
    showNewGroup: boolean;
    searchGroupName: any;
    searchGroup: any;
    searchTextTable: any;
    addMemPermission = 1;
    _passwordService: PasswordService;
    meetingPermissionStatus: any;
    newMemberUserCode: any;
    firstName: any;
    lastName: any;
    userName: any;
    email: any;
    password: any;
    members: any;
    memObj: any = {};

    @ViewChild('emailField') emailField: ElementRef;
    @ViewChild('groupNameField') groupNameField: ElementRef;
    @ViewChild('addNewGroupModal') public addNewGroupModal: CustomModalComponent;
    newGroup: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Group',
        smallHeading: 'You can add new group details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Group',
        Button2Content: ''
    };
    @ViewChild('addNewMemberModal') public addNewMemberModal: CustomModalComponent;
    newMember: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Member',
        smallHeading: 'You can add new member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Member',
        Button2Content: ''
    };
    constructor(groupService: GroupService, userService: UserService, public alertService: AlertService, passwordService: PasswordService) {
        this._groupService = groupService;
        this._userService = userService;
        this._passwordService = passwordService;
    }

    ngOnInit() {
        this.showGroupNameUiFlag = false;
        this.countFlag = false;
        this.showSelectedGroup = false;
        this.newGroupName = '';
        this.selectedGroupObj = null;
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                const payload = { userCode: this.loggedInUserObj.userCode };
                this._groupService.setGroupList(payload);
                this._userService.setUserList(payload);
                // this._groupService.setGroupListObjByLoggedInUserId(payload);
                this._userService.setUserList(payload);
                this._groupService.getGroupList().subscribe(groupData => {
                    if (groupData[0] === undefined) {
                        this.groupList = [];
                        return false;
                    }
                    if (groupData[0].errorFl === true || groupData[0].warningFl === true) {
                        this.groupList = [];
                        return this.alertService.warning(groupData[0].message, 'Warning');
                    } else {
                        this.groupList = groupData;
                    }
                });
                this._groupService.getGroupMembersByGroup(payload).subscribe(memberData => {
                    if (memberData[0].errorFl || memberData[0].warningFl) {
                        this.groupMemberObjList = [];
                    } else {
                    this.groupMemberObjList = memberData;
                    }
                });
            }
        });
        // this._groupService.getGroupListObjByLoggedInUserId().subscribe(data => {
        //     this.groupMemberObjList = data;
        // });
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
    addGroup() {
        if (this.newGroupName === null || typeof this.newGroupName === 'undefined' || this.newGroupName.trim() === '') {
            return this.alertService.warning('Please Enter Group Name', 'Warning');
        } else {
            // const payload = { 'groupName': this.newGroupName , 'userCode': this.loggedInUserObj.userCode };
            const payload = { 'groupName': this.newGroupName, 'user': this.loggedInUserObj };
            const group = { group: { groupName: this.newGroupName, status: { status: 'ACTIVE' } } };
            this._groupService.saveGroupDetails(payload).subscribe(
                (res) => {
                    if (res.errorFl === true || res.warningFl === true) {
                        this.newGroupName = '';
                        return this.alertService.warning(res.message, 'Warning');
                    } else {
                        this.groupList.push(res);
                        this.newGroupName = '';
                        this.groupNameField.nativeElement.focus();
                        this.selectedGroupObj = res.group;
                        return this.alertService.success('Group has been added successfully', 'Success');
                    }
                });
        }
    }
    displayGroupDetails(group, index) {
        if (group.groupId.groupId === '' || group.groupId.groupId === null ||
            typeof group.groupId.groupId === 'undefined') {
            this.selectedGroupObj = this.selectedNewGroupObj;
        } else {
            this.selectedGroupObj = group.groupId;
        }
        this.showSelectedGroup = true;
        this.selectedGroupName = group.groupId.groupName;
        this.filterMemberList = [];
        console.log('SIZE: ' + this.groupMemberObjList.length);
        for (this.i = 0; this.i < this.groupMemberObjList.length; this.i++) {
            // console.log('ID: ' + this.groupMemberObjList[this.i].team.id);
            if (this.groupMemberObjList[this.i].groupId.groupId === group.groupId.groupId) {
                this.filterMemberList.push(this.groupMemberObjList[this.i]);
            }
        }
        this.selectedGroupObjFromList = group;
        if (this.selectedGroupObj.status.status === 'CANCEL') {
            this.addMemPermission = 2;
        } else {
            this.addMemPermission = 1;
        }
        this.selectedNewGroupObj = index;
    }
    // to open group popup
    openGroup() {
        this.addNewGroupModal.open();
    }
    openMemberPopup() {
        if (this.selectedGroupObj === '' || this.selectedGroupObj === null || typeof this.selectedGroupObj === 'undefined') {
            return this.alertService.warning('Please Select Group', 'Warning');
        } else {
            if (this.addMemPermission !== 2) {
                this.addNewMemberModal.open();
            } else {
                return this.alertService.warning('Selected group has deactivated , you can not add member in this group ', 'Warning');
            }
        }
    }
    onPageChange(number: number) {
        this.config.currentPage = number;
    }

    // close group modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'addNewGroup':
                this.addNewGroupModal.close();
                break;
            case 'addNewMember':
                this.addNewMemberModal.close();
                this.clearMemPopupField();
                break;
            // case 'updateTeam':
            //     this.addUpdateTeamModal.close();
            //     break;
            // case 'deleteTeam':
            //     this.addUpdateTeamModal.close();
            //     break;
        }
    }
    // add new member
    addMember() {
        if (this.firstName === null || typeof this.firstName === 'undefined' || this.firstName.trim() === '') {
            return this.alertService.warning('Please Enter First Name ', 'Warning');
        } else if (this.lastName === null || typeof this.lastName === 'undefined' || this.lastName.trim() === '') {
            return this.alertService.warning('Please Enter Last Name ', 'Warning');
        } else if (this.email === null || typeof this.email === 'undefined' || this.email.trim() === '') {
            return this.alertService.warning('Please Enter Email', 'Warning');
        } else if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '') {
            return this.alertService.warning('Please Enter UserName ', 'Warning');
        } else if (this.password === null || typeof this.password === 'undefined' || this.password.trim() === '') {
            return this.alertService.warning('Please Enter Password ', 'Warning');
        } else {
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (!EMAIL_REGEXP.test(this.email)) {
                this.emailField.nativeElement.focus();
                return this.alertService.warning('Please enter valid email', 'Warning');
            } else {
                const meetingCurrentDisplayStatus = this.getStatusByUser(this.meetingPermissionStatus);
                const payload = {
                    'email': this.email,
                    'name': this.userName,
                    'password': this._passwordService.encrypted(this.password),
                    'firstName': this.firstName.substring(0, 1).toUpperCase() + this.firstName.substring(1),
                    'lastName': this.lastName.substring(0, 1).toUpperCase() + this.lastName.substring(1),
                    'status.onlineStatus': false,
                    'meetingPermissionStatus': { status: meetingCurrentDisplayStatus },
                    'registeredBy': this.loggedInUserObj.userCode,
                    'group': this.selectedGroupObj
                };
                this._groupService.saveGroupMember(payload).subscribe(
                    (res) => {
                        if (res.errorFl === true || res.warningFl === true) {
                            return this.alertService.warning(res.message, 'Warning');
                        } else {
                            this.memObj = {
                                userId: {
                                    firstName: this.firstName, lastName: this.lastName, email: this.email,
                                    status: { status: 'ACTIVE' }, meetingPermissionStatus: { status: meetingCurrentDisplayStatus }
                                }
                                , group: this.selectedGroupObj
                            };
                            this.groupMemberObjList.push(this.memObj);
                            // this.filterMemberList.push(this.memObj);
                            this.clearMemPopupField();
                            this.meetingPermissionStatus = false;
                            this.newMemberUserCode = res.userCode;
                            return this.alertService.success('Member has saved successfully ', 'Success');
                        }
                    });
            }
        }
    }
    private getStatusByUser(updatedStaus) {
        let currentDisplayStatus;
        if (updatedStaus === true) {
            currentDisplayStatus = 'ACTIVE';
        } else {
            currentDisplayStatus = 'INACTIVE';
        }
        return currentDisplayStatus;
    }
    clearMemPopupField() {
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.meetingPermissionStatus = false;
    }
    onMemberSelect() {
           this.members = this.members.trim();
    }
}
