import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { PasswordService } from '../../../services/password.service';
import { debug } from 'util';

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
    public loading: boolean;
    // public isDoubleClick: boolean;
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
    selectedItems: any[];
    selectedMemberIds: any[];
    selectedMembers: any[];
    dropdownSettings: any = {};
    createGroupsVal = '';
    showtypeMessage = false;
    showGroupNameUiFlag: boolean;
    groupList = [];
    groupArray = [];
    memberList = [];
    loggedInUserObj: any;
    selectedGroupObj: any;
    selectedNewGroupObj: any;
    selectedGroupName: any;
    selectedGroupObjFromList: any;
    selectedMember: any;
    selectedMemIndex: any;
    groupMemberCount: any;
    groupMemberObjList = [];
    showSelectedGroup: boolean;
    countFlag: boolean;
    selectedGroupUsers: any[];
    userList: any[];
    showNewGroup: boolean;
    searchMember: any;
    searchGroup: any;
    searchTextTable: any;
    addMemPermission = 1;
    _passwordService: PasswordService;
    meetingPermissionStatus: any;
    newMemberUserCode: any;
    firstName: any;
    lastName: any;
    userCode: any;
    userName: any;
    email: any;
    password: any;
    members: any;
    memObj: any = {};
    newMemObj: any = {};
    updateGroupName: any;
    lastIndex: number;
    result: any;
    @ViewChild('emailField') emailField: ElementRef;
    // @ViewChild('groupNameField') groupNameField: ElementRef;
    @ViewChild('deleteGroupField') deleteGroupField: ElementRef;
    @ViewChild('addNewGroupModal') public addNewGroupModal: CustomModalComponent;
    newGroup: CustomModalModel = {
        titleIcon: '<i class="fa fa-users"></i>',
        title: 'New Group',
        smallHeading: 'You can add new group details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Group',
        Button2Content: ''
    };
    @ViewChild('addUpdateGroupModal') public addUpdateGroupModal: CustomModalComponent;
    updateGroup: CustomModalModel = {
        titleIcon: '<i class="fa fa-pencil-square-o"></i>',
        title: 'Update Group',
        smallHeading: 'You can update group details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Group',
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
    @ViewChild('deleteGroupModal') public deleteGroupModal: CustomModalComponent;
    deleteGroup: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Delete Group',
        smallHeading: 'You can delete group details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete Group',
        Button2Content: ''
    };
    @ViewChild('deleteMemberModal') public deleteMemberModal: CustomModalComponent;
    deleteMember: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Delete member',
        smallHeading: 'You can delete member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete member',
        Button2Content: ''
    };
    constructor(groupService: GroupService, userService: UserService, public alertService: AlertService, passwordService: PasswordService) {
        this._groupService = groupService;
        this._userService = userService;
        this._passwordService = passwordService;
    }

    ngOnInit() {
        // this.isDoubleClick = false;
        this.showGroupNameUiFlag = false;
        this.countFlag = false;
        this.showSelectedGroup = false;
        this.newGroupName = '';
        this.selectedGroupObj = null;
        this.selectedMemberIds = [];
        this.selectedMembers = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 4,
            allowSearchFilter: true
        };
        this.loading = true;
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
            if (data.errorFl === true || data.warningFl === true) {
                this.loading = false;
                return this.alertService.warning(data.message, 'Warning');
            } else {
                const payload = { userCode: this.loggedInUserObj.userCode };
                this._groupService.setGroupList(payload);
                this._groupService.getGroupList().subscribe(groupData => {
                    if (groupData === undefined) {
                        this.loading = false;
                        this.groupList = [];
                        return false;
                        // this.alertService.warning('There are no groups', 'Warning');
                    } else {
                        if (groupData.errorFl === true || groupData.warningFl === true) {
                            this.groupList = [];
                            this.loading = false;
                            return this.alertService.warning(groupData.message, 'Warning');
                        } else {
                            this.groupList = groupData;
                            this.loading = false;
                        }
                    }
                });
            }
        });
    }
    onItemSelect(item: any) {
        // console.log('onItemSelect : ' + item.item_id);
        this.selectedMemberIds.push(item.item_id);
    }
    onSelectAll(items: any) {
        this.selectedMemberIds = [];
        for (let index = 0; index < items.length; index++) {
            // console.log('onSelectAll : ' + items[index].item_id);
            this.selectedMemberIds.push(items[index].item_id);
        }
    }
    OnItemDeSelect(item: any) {
        // console.log('OnItemDeSelect : ' + this.selectedMemberIds.indexOf(item.item_id));
        this.selectedMemberIds.splice(this.selectedMemberIds.indexOf(item.item_id), 1);
    }
    onDeSelectAll(items: any) {
        this.selectedMemberIds = [];
    }
    // onFilterChange(items: any) {
    //     console.log('onFilterChange');
    // }
    // onOpen(items: any) {
    //     console.log('Open : ' + items);
    // }
    // onClose(items: any) {
    //     console.log('Close : ' + items);
    // }
    // onFilterChange(items: any[]) {
    //     console.log('onFilterChange : ' + items);
    // }
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
    // to open group popup
    openGroup() {
        this.addNewGroupModal.open();
    }
    addGroup() {
        if (this.newGroupName === null || typeof this.newGroupName === 'undefined' || this.newGroupName.trim() === '') {
            return this.alertService.warning('Please enter group name', 'Warning');
        } else {
           const payload = { 'groupName': this.newGroupName, 'user': this.loggedInUserObj };
            this._groupService.saveGroupDetails(payload).subscribe(
                (res) => {
                    if (res.errorFl === true || res.warningFl === true) {
                        this.newGroupName = '';
                        return this.alertService.warning(res.message, 'Warning');
                    } else {
                        this.groupList.push(res);
                        this.newGroupName = '';
                        // this.groupNameField.nativeElement.focus();
                        // this.selectedGroupObj = res.group;
                        return this.alertService.success('Group has been added successfully', 'Success');
                    }
                });
        }
    }
    // test(): boolean {
    //     this.isDoubleClick = true;
    //     return this.isDoubleClick;
    // }
    displayGroupDetails(group, index) {
        this.loading = true;
        if (group.groupId.groupId === '' || group.groupId.groupId === null ||
            typeof group.groupId.groupId === 'undefined') {
            this.selectedGroupObj = this.selectedNewGroupObj;
        } else {
            this.selectedGroupObj = group.groupId;
        }
        this.showSelectedGroup = true;
        this.selectedGroupName = group.groupId.groupName;
        const payload = { groupId: this.selectedGroupObj.groupId};
        this.memberList = [];
        this.groupMemberObjList = [];
        this.selectedItems = [];
        this.selectedMemberIds = [];
        this._groupService.getMemberByLocalgroup(payload).subscribe(memberData => {
            if (memberData === undefined) {
                return false;
            }
            if (memberData.errorFl === true || memberData.warningFl === true) {
                this.loading = false;
                return this.alertService.warning(memberData.message, 'Warning');
            } else {
                this.memberList = memberData;
                this.loading = false;
            }
        });
        const groupObjPayload = { userCode: this.loggedInUserObj.userCode + ',' + this.selectedGroupObj.groupId };
        this._groupService.setGroupListObjByLoggedInUserId(groupObjPayload);
        this._groupService.getGroupListObjByLoggedInUserId().subscribe(groupObjData => {
            if (groupObjData[0] === undefined) {
                return false;
            }
            this.groupMemberObjList = groupObjData;
        });
        this.selectedGroupObjFromList = group;
        if (this.selectedGroupObj.status.status === 'CANCEL') {
            this.addMemPermission = 2;
        } else {
            this.addMemPermission = 1;
        }
        this.selectedNewGroupObj = index;
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
        }
    }
    deleteSelectedGroup() {
        if (this.addMemPermission !== 2) {
            this.deleteGroupModal.open();
            this.groupList.splice(this.groupList.indexOf(this.selectedGroupObjFromList), 1);
        } else {
            return this.alertService.warning('Selected group has already deactivated', 'Warning');
        }
    }
    deleteGroupDetails() {
        const payload = { groupCode: this.selectedGroupObj.groupId };
        this._groupService.deleteGroup(payload).subscribe(res => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, 'Warning');
            } else {
                this.showSelectedGroup = false;
                this.deleteGroupModal.close();
                return this.alertService.success('Group has been deleted successfully', 'Success');
            }
        });
    }
    deleteMemberPopup(member) {
        if (member.userCode !== null) {
            this.deleteMemberModal.open();
            this.selectedMember = member;
            this.selectedMemIndex = this.memberList.indexOf(member);
        } else {
            return this.alertService.warning('Member ' + member.firstName + ' ' + member.lastName +
                '  is already inactive', 'Inactive Member');
        }
    }
    deleteMemberDetails() {
        if (this.selectedMember.userCode === null || typeof this.selectedMember.userCode === 'undefined'
            || this.selectedMember.userCode.trim() === '') {
            this.selectedMember.userCode = this.newMemberUserCode;
        }
        const payload = { 'groupId': this.selectedGroupObj.groupId,
                          'userId': this.selectedMember.userCode };
        this._groupService.deleteMember(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.newMemObj = { item_id: data.userId.userCode, item_text: data.userId.firstName
                    + ' ' + data.userId.lastName };
                this.groupMemberObjList.push(this.newMemObj);
                this.memberList.splice(this.memberList.indexOf(this.selectedMember), 1);
                this.deleteMemberModal.close();
                return this.alertService.success('Member ' + data.userId.firstName
                    + ' ' + data.userId.lastName +
                    ' has been deleted successfully', 'Delete Member');
            }
        });
    }
    editGroup() {
        if (this.addMemPermission !== 2) {
            this.addUpdateGroupModal.open();
            this.updateGroupName = this.selectedGroupObj.groupName;
            this.groupList.splice(this.groupList.indexOf(this.selectedGroupObjFromList), 1);
        } else {
            return this.alertService.warning('Selected group has deactivated, you can not edit group', 'Warning');
        }
    }
    updateGroupDetails() {
        if (this.updateGroupName === null || typeof this.updateGroupName === 'undefined' || this.updateGroupName.trim() === '') {
            return this.alertService.warning('Please enter group name', 'Warning');
        } else {
            const payload = {
                groupName: this.updateGroupName,
                groupId: this.selectedGroupObj.groupId
            };
            // const payload = { 'groupName': this.updateGroupName, 'user': this.loggedInUserObj };
            this._groupService.saveGroupDetails(payload).subscribe(
                (res) => {
                    if (res.errorFl === true || res.warningFl === true) {
                        return this.alertService.warning(res.message, 'Warning');
                    } else {
                        this.selectedGroupObj.groupName = this.updateGroupName;
                        this.selectedGroupName = this.updateGroupName;
                        this.addUpdateGroupModal.close();
                        return this.alertService.success('Group has been updated successfully', 'Success');
                    }
                });
        }
    }
    updateMembers() {
        // console.log('Check : ' + this.isDoubleClick);
        // if (this.isDoubleClick === true) {
        //     this.alertService.warning('Please click only once.', 'Warning');
        // } else {
            if (this.selectedMemberIds === null || this.selectedMemberIds === undefined || this.selectedMemberIds.length === 0) {
                return this.alertService.warning('Please select members', 'Warning');
            } else {
                const payload = {
                    groupId: this.selectedGroupObj.groupId,
                    selectedMemberCodeList: this.selectedMemberIds,
                    userCode: this.loggedInUserObj.userCode
                };
                this._groupService.saveGroupMember(payload).subscribe(memberData => {
                        let addedMemberList = [];
                        let notAddedMemberList = [];
                        Object.keys(memberData).map(key => {
                            if (key === 'notAdded') {
                                notAddedMemberList = memberData[key];
                            }
                            if (key === 'added') {
                                addedMemberList = memberData[key];
                            }
                        });
                        this.memberList = [];
                        this.memberList = addedMemberList;
                        this.groupMemberObjList = [];
                        for (let i = 0; i < notAddedMemberList.length; i++) {
                            this.memObj = { item_id: notAddedMemberList[i].userCode, item_text: notAddedMemberList[i].firstName
                            + ' ' + notAddedMemberList[i].lastName };
                            this.groupMemberObjList.push(this.memObj);
                        }
                        this.selectedItems = [];
                        this.selectedMemberIds = [];
                        return this.alertService.success('Members has been updated successfully', 'Success');
                    });
                }
                // this.isDoubleClick = false;
            // }
    }
    groupCloseEditPopup() {
       this.groupList.splice(this.selectedNewGroupObj , 0 , this.selectedGroupObjFromList);
    }
    groupCloseDeletePopup(flag) {
        if (flag === 2 && this.showSelectedGroup === true) {
            this.groupList.splice(this.selectedNewGroupObj , 0 , this.selectedGroupObjFromList);
        } else {
            this.deleteGroupModal.close();
        }
    }
    clearGroupPopupField() {
        this.newGroupName = '';
    }
}
