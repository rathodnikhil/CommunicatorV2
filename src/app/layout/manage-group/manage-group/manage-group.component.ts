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
    filterMemberList = [];
    filterMemList = [];
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
    filterMemObj: any = {};
    updateGroupName: any;
    deleteMemberFlag = 1;
    @ViewChild('emailField') emailField: ElementRef;
    @ViewChild('groupNameField') groupNameField: ElementRef;
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
        this.showGroupNameUiFlag = false;
        this.countFlag = false;
        this.showSelectedGroup = false;
        this.newGroupName = '';
        this.selectedGroupObj = null;
        this.selectedMemberIds = [];
        this.selectedMembers = [];
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
                this._groupService.getGroupListObjByLoggedInUserId().subscribe(data1 => {
                    this.groupMemberObjList = data1;
                });
            }
        });

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 4,
            allowSearchFilter: true
        };
    }
    onItemSelect(item: any) {
        this.selectedMemberIds.push(item.item_id);
    }
    onSelectAll(items: any) {
        this.selectedMemberIds.push(items.item_id);
    }
    OnItemDeSelect(item: any) {
        this.selectedMemberIds.splice(item.item_id, 1);
    }
    onDeSelectAll(items: any) {
        this.selectedMemberIds.splice(items.item_id, 1);
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
           const payload = { 'groupName': this.newGroupName, 'user': this.loggedInUserObj };
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
        const payload = { groupId: this.selectedGroupObj.groupId};
        this.memberList = [];
        this.filterMemList = [];
        this.filterMemberList = [];
        this.groupMemberObjList = [];
        this.selectedMemberIds = [];
        const payload1 = { userCode: this.loggedInUserObj.userCode };
        this._groupService.setGroupListObjByLoggedInUserId(payload1);
        this._groupService.getGroupListObjByLoggedInUserId().subscribe(data1 => {
            this.groupMemberObjList = data1;
        });
        this.filterMemList = this.groupMemberObjList;
        this._groupService.getMemberByLocalgroup(payload).subscribe(memberData => {
            if (memberData[0] === undefined) {
                this.memberList = [];
                return false;
            }
            if (memberData[0].errorFl === true || memberData[0].warningFl === true) {
                this.memberList = [];
                return this.alertService.warning(memberData[0].message, 'Warning');
            } else {
                for (let i = 0; i < memberData.length; i++) {
                    this.memObj = { item_id: memberData[i].userId.userCode, item_text: memberData[i].userId.firstName
                        + ' ' + memberData[i].userId.lastName };
                    this.memberList.push(this.memObj);
                    for (let j = 0; j < this.filterMemList.length; j++) {
                        if (this.filterMemList[j].item_id === memberData[i].userId.userCode) {
                            this.filterMemList.splice(j, 1);
                        }
                    }
                }
                this.filterMemberList = this.filterMemList;
                // console.log('filterMemberList.length : ' + this.filterMemberList.length);
            }
        });
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
    onPageChange(number: number) {
        this.config.currentPage = number;
    }

    // close group modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'addNewGroup':
                this.addNewGroupModal.close();
                break;
            // case 'updateTeam':
            //     this.addUpdateTeamModal.close();
            //     break;
            // case 'deleteTeam':
            //     this.addUpdateTeamModal.close();
            //     break;
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
        const payload = { 'groupCode': this.selectedGroupObj.groupId };
        this._groupService.deleteGroup(payload).subscribe(res => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, 'Warning');
            } else {
                this.deleteGroupModal.close();
                this.showSelectedGroup = false;
                return this.alertService.success('Group has been deleted successfully', 'Success');
            }
        });
    }
    deleteMemberPopup(member, index) {
        if (member.item_id !== null) {
            this.deleteMemberModal.open();
            this.selectedMember = member;
        }
        this.selectedMemIndex = index;
        this.selectedMember = member;
        this.deleteMemberFlag = 1;
    }
    deleteMemberDetails() {
        if (this.selectedMember.item_id === null || typeof this.selectedMember.item_id === 'undefined'
            || this.selectedMember.item_id.trim() === '') {
            this.selectedMember.item_id = this.newMemberUserCode;
        }
        const payload = { 'groupCode': this.selectedGroupObj.groupId,
                          'memberId': this.selectedMember.item_id };
        this._groupService.deleteMember(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.deleteMemberFlag = 2;
                for (let i = 0; i < this.groupMemberObjList.length; i++) {
                    if (this.groupMemberObjList[i].item_id === data.item_id) {
                        this.groupMemberObjList[i].item_id = data;
                    }
                }
                return this.alertService.success('Member ' + data.item_name +
                    ' has been deleted successfully', 'Delete Member');
            }
        });
    }
    // cancelDeletePopup(noFlag) {
    //     if (noFlag === 1) {
    //         this.deleteMemberModal.close();
    //     } else {
    //         const memObj = this.selectedmemObj(this.selectedMember, this.deleteMemberFlag, noFlag);
    //         // this.filterMemberList.splice(this.selectedMemIndex, 0, memObj);
    //     }
    // }
    // private selectedmemObj(obj, editDeletelag, noFlag) {
    //     let statusval ;
    //     if (noFlag === 1 || (editDeletelag === 2 && noFlag === 2)) {
    //         statusval = 'INACTIVE';
    //     } else if (editDeletelag === 1) {
    //         statusval = obj.userId.status.status;
    //     }
    //     return {
    //         userId: {
    //             firstName: obj.userId.firstName, lastName: obj.userId.lastName, email: obj.userId.email,
    //             status: { status: statusval}, meetingPermissionStatus: { status: obj.userId.meetingPermissionStatus.status },
    //             userCode: obj.userId.userCode}, group: this.selectedGroupObj
    //     };
    // }
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
        if (this.selectedItems === null || this.selectedItems === undefined || this.selectedItems.length === 0) {
            return this.alertService.warning('Please select members', 'Warning');
        } else {
            this.filterMemberList = [];
            this.memberList = [];
            this.filterMemList = [];
            this.groupMemberObjList = [];
            const payload = {
                groupId: this.selectedGroupObj.groupId,
                selectedMemberCodeList: this.selectedMemberIds
            };
            this._groupService.saveGroupMember(payload).subscribe(memberData => {
                if (memberData[0] === undefined) {
                    this.memberList = [];
                    return false;
                }
                if (memberData[0].errorFl === true || memberData[0].warningFl === true) {
                    this.memberList = [];
                    return this.alertService.warning(memberData[0].message, 'Warning');
                } else {
                    const payload1 = { userCode: this.loggedInUserObj.userCode };
                    this._groupService.setGroupListObjByLoggedInUserId(payload1);
                    this._groupService.getGroupListObjByLoggedInUserId().subscribe(data1 => {
                        this.groupMemberObjList = data1;
                    });
                    this.filterMemList = this.groupMemberObjList;
                    for (let i = 0; i < memberData.length; i++) {
                        this.memObj = { item_id: memberData[i].userId.userCode, item_text: memberData[i].userId.firstName
                            + ' ' + memberData[i].userId.lastName };
                        this.memberList.push(this.memObj);
                        for (let j = 0; j < this.filterMemList.length; j++) {
                            if (this.filterMemList[j].item_id === memberData[i].userId.userCode) {
                                this.filterMemList.splice(j, 1);
                            }
                        }
                    }
                    this.filterMemberList = this.filterMemList;
                    this.selectedItems = [];
                    this.selectedMemberIds = [];
                    return this.alertService.success('Members has been updated successfully', 'Success');
                }
            });

            // this._groupService.saveGroupMember(payload).subscribe(
            //     (res) => {
            //         if (res.errorFl === true || res.warningFl === true) {
            //             return this.alertService.warning(res.message, 'Warning');
            //         } else {
            //             this.memObj = {
            //                 userId: {
            //                     firstName: this.firstName, lastName: this.lastName, userCode: this.userCode
            //                 }
            //             };
            //             this.memObj = [{ item_id: this.userCode, item_text: this.firstName + ' ' + this.lastName }];
            //             this.selectedMembers.push(this.memObj);
            //             this.selectedItems = [];
            //             return this.alertService.success('Members has been updated successfully', 'Success');
            //         }
            //     });
        }
    }
    groupCloseEditPopup() {
       this.groupList.splice(this.selectedNewGroupObj , 0 , this.selectedGroupObjFromList);
    }
    groupCloseDeletePopup() {
        this.groupList.splice(this.selectedNewGroupObj , 0 , this.selectedGroupObjFromList);
    }
    clearGroupPopupField() {
        this.newGroupName = '';
    }
    // resetSelection() {
    //     this.filterMemberList = [];
    // }
    // add new member
    // addMember() {
    //     if (this.firstName === null || typeof this.firstName === 'undefined' || this.firstName.trim() === '') {
    //         return this.alertService.warning('Please Enter First Name ', 'Warning');
    //     } else if (this.lastName === null || typeof this.lastName === 'undefined' || this.lastName.trim() === '') {
    //         return this.alertService.warning('Please Enter Last Name ', 'Warning');
    //     } else if (this.email === null || typeof this.email === 'undefined' || this.email.trim() === '') {
    //         return this.alertService.warning('Please Enter Email', 'Warning');
    //     } else if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '') {
    //         return this.alertService.warning('Please Enter UserName ', 'Warning');
    //     } else if (this.password === null || typeof this.password === 'undefined' || this.password.trim() === '') {
    //         return this.alertService.warning('Please Enter Password ', 'Warning');
    //     } else {
    //         const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    //         if (!EMAIL_REGEXP.test(this.email)) {
    //             this.emailField.nativeElement.focus();
    //             return this.alertService.warning('Please enter valid email', 'Warning');
    //         } else {
    //             const meetingCurrentDisplayStatus = this.getStatusByUser(this.meetingPermissionStatus);
    //             const payload = {
    //                 'email': this.email,
    //                 'name': this.userName,
    //                 'password': this._passwordService.encrypted(this.password),
    //                 'firstName': this.firstName.substring(0, 1).toUpperCase() + this.firstName.substring(1),
    //                 'lastName': this.lastName.substring(0, 1).toUpperCase() + this.lastName.substring(1),
    //                 'status.onlineStatus': false,
    //                 'meetingPermissionStatus': { status: meetingCurrentDisplayStatus },
    //                 'registeredBy': this.loggedInUserObj.userCode,
    //                 'group': this.selectedGroupObj
    //             };
    //             this._groupService.saveGroupMember(payload).subscribe(
    //                 (res) => {
    //                     if (res.errorFl === true || res.warningFl === true) {
    //                         return this.alertService.warning(res.message, 'Warning');
    //                     } else {
    //                         this.memObj = {
    //                             userId: {
    //                                 firstName: this.firstName, lastName: this.lastName, email: this.email,
    //                                 status: { status: 'ACTIVE' }, meetingPermissionStatus: { status: meetingCurrentDisplayStatus }
    //                             }
    //                             , group: this.selectedGroupObj
    //                         };
    //                         this.memObj = [{ item_id: this.groupMemberObjList.length, item_text: this.firstName }];
    //                         this.groupMemberObjList.push(this.memObj);
    //                         this.meetingPermissionStatus = false;
    //                         this.newMemberUserCode = res.userCode;
    //                         return this.alertService.success('Member has saved successfully', 'Success');
    //                     }
    //                 });
    //         }
    //     }
    // }
    // private getStatusByUser(updatedStaus) {
    //     let currentDisplayStatus;
    //     if (updatedStaus === true) {
    //         currentDisplayStatus = 'ACTIVE';
    //     } else {
    //         currentDisplayStatus = 'INACTIVE';
    //     }
    //     return currentDisplayStatus;
    // }
    // onMemberSelect() {
    //        this.members = this.members.trim();
    // }
}
