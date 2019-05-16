import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';

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
    limitSelection = false;
    selectedItems: any[];
    selectedMemberIds: any[];
    selectedMembers: any[];
    dropdownSettings: any = {};
    showGroupNameUiFlag: boolean;
    groupList = [];
    memberList = [];
    loggedInUserObj: any;
    selectedGroupObj: any;
    selectedNewGroupObj: any;
    selectedGroupName: any;
    selectedGroupObjFromList: any;
    selectedMember: any;
    selectedMemIndex: any;
    groupMemberObjList = [];
    showSelectedGroup: boolean;
    showNewGroup: boolean;
    searchMember: any;
    searchGroup: any;
    addMemPermission = 1;
    newMemberUserCode: any;
    firstName: any;
    lastName: any;
    userCode: any;
    memObj: any = {};
    newMemObj: any = {};
    updateGroupName: any;
    viewMsg = false;
    @ViewChild('emailField') emailField: ElementRef;
    @ViewChild('deleteGroupField') deleteGroupField: ElementRef;
    @ViewChild('manageGroupSpinner') manageGroupSpinnerMod: SpinnerComponent;
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
    constructor(groupService: GroupService, userService: UserService, public alertService: AlertService) {
        this._groupService = groupService;
        this._userService = userService;
    }

    ngOnInit() {
        this.setVariableDefaultValues();
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
               this._groupService.setGroupList();
                this.groupListApiCall();
            }
        });
    }
    private groupListApiCall() {
        this._groupService.getGroupList().subscribe(groupData => {
                if (groupData.warningFl === true || groupData.errorFl === true || groupData === undefined) {
                    this.groupList = [];
                    this.manageGroupSpinnerMod.hideSpinner();
                    return this.alertService.warning(groupData.message, 'Warning');
                } else {
                   // this code for avoid error onPageLoad of Cannot find a differ supporting object '[object Object]'
                    for (let key in groupData) {
                        this.groupList.push(groupData[key]);
                    }
                    // this.groupList = groupData;
                    this.manageGroupSpinnerMod.hideSpinner();
                }
        });
    }

    private setVariableDefaultValues() {
        this.showGroupNameUiFlag = false;
        this.showSelectedGroup = false;
        this.newGroupName = '';
        this.selectedGroupObj = null;
        this.selectedMemberIds = [];
        this.selectedMembers = [];
        this.setDropDownDeaultValues();
    }

    private setDropDownDeaultValues() {
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
        this.selectedMemberIds = [];
        for (let index = 0; index < items.length; index++) {
            this.selectedMemberIds.push(items[index].item_id);
        }
    }
    OnItemDeSelect(item: any) {
        this.selectedMemberIds.splice(this.selectedMemberIds.indexOf(item.item_id), 1);
    }
    onDeSelectAll(items: any) {
        this.selectedMemberIds = [];
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
    // to open group popup
    openGroup() {
        this.addNewGroupModal.open();
    }
    addGroup() {
        if (this.newGroupName === null || typeof this.newGroupName === 'undefined' || this.newGroupName.trim() === '') {
            return this.alertService.warning('Please enter group name', 'Warning');
        } else {
           const payload = { 'groupName': this.newGroupName, 'user': this.loggedInUserObj };
            this.addGroupApiCall(payload);
        }
    }
    private addGroupApiCall(payload: { 'groupName': any; 'user': any; }) {
        this._groupService.saveGroupDetails(payload).subscribe((res) => {
            if (res.errorFl === true || res.warningFl === true) {
                this.newGroupName = '';
                return this.alertService.warning(res.message, 'Warning');
            } else {
                return this.setSucessResponseOnAddGroup(res);
            }
        });
    }

    private setSucessResponseOnAddGroup(res: any) {
        this.groupList.push(res);
        this.newGroupName = '';
        return this.alertService.success('Group has been added successfully', 'Success');
    }

    displayGroupDetails(group, index) {
        this.manageGroupSpinnerMod.showSpinner();
        this.getSelectedGroupObjectValue(group);
        const payload = this.ClearValuesOnGroupChangeAndGetPayload(group);
        this.groupMemberByLocalGroupApiCall(payload);
        const groupObjPayload = { groupId: this.selectedGroupObj.groupId };
        this.groupsByLoggedInUserIdApiCall(groupObjPayload);
        this.selectedGroupObjFromList = group;
        this.setMemberPermission();
        this.selectedNewGroupObj = index;
    }
    private getSelectedGroupObjectValue(group: any) {
        if (group.groupId.groupId === '' || group.groupId.groupId === null ||
            typeof group.groupId.groupId === 'undefined') {
            this.selectedGroupObj = this.selectedNewGroupObj;
        } else {
            this.selectedGroupObj = group.groupId;
        }
    }

    private setMemberPermission() {
        if (this.selectedGroupObj.status.status === 'CANCEL') {
            this.addMemPermission = 2;
        } else {
            this.addMemPermission = 1;
        }
    }

    private groupsByLoggedInUserIdApiCall(groupObjPayload: { groupId: any; }) {
        this._groupService.getGroupListObjByLoggedInUserId(groupObjPayload).subscribe(groupObjData => {
            if (groupObjData[0].errorFl === true) {
                return this.alertService.warning(groupObjData[0].message, 'Warning');
            } else if (groupObjData[0].warningFl === true) {
                return false;
            } else {
                this.groupMemberObjList = groupObjData;
            }
        });
    }

    private groupMemberByLocalGroupApiCall(payload: { groupId: any; }) {
        this._groupService.getMemberByLocalgroup(payload).subscribe(memberData => {
            if (memberData[0].errorFl === true) {
                return this.alertService.warning(memberData.message, 'Warning');
            } else if (memberData[0].warningFl === true || memberData === undefined) {
                return false;
            } else {
                this.memberList = memberData;
            }
            this.manageGroupSpinnerMod.hideSpinner();
        });
    }

    private ClearValuesOnGroupChangeAndGetPayload(group: any) {
        this.showSelectedGroup = true;
        this.selectedGroupName = group.groupId.groupName;
        const payload = { groupId: this.selectedGroupObj.groupId };
        this.memberList = [];
        this.groupMemberObjList = [];
        this.selectedItems = [];
        this.selectedMemberIds = [];
        return payload;
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
        this.deleteGroupApiCall(payload);
    }
    private deleteGroupApiCall(payload: { groupCode: any; }) {
        this._groupService.deleteGroup(payload).subscribe(res => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, 'Warning');
            } else {
                return this.setDeleteGroupSuccessResponse();
            }
        });
    }

    private setDeleteGroupSuccessResponse() {
        this.showSelectedGroup = false;
        this.deleteGroupModal.close();
        return this.alertService.success('Group has been deleted successfully', 'Success');
    }

    deleteMemberPopup(member) {
        if (member.userCode !== null) {
            this.deleteMemberAction(member);
        } else {
            return this.memberInactiveAction(member);
        }
    }
    private memberInactiveAction(member: any) {
        this.viewMsg = false;
        return this.alertService.warning('Member ' + member.firstName + ' ' + member.lastName +
            '  is already inactive', 'Inactive Member');
    }

    private deleteMemberAction(member: any) {
        this.deleteMemberModal.open();
        this.selectedMember = member;
        this.selectedMemIndex = this.memberList.indexOf(member);
    }

    deleteMemberDetails() {
        this.deleteMemberValidation();
        const payload = { 'groupId': this.selectedGroupObj.groupId,
                          'userId': this.selectedMember.userCode };
        this.deleteMemberApiCall(payload);
    }
    private deleteMemberApiCall(payload: { 'groupId': any; 'userId': any; }) {
        this._groupService.deleteMember(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.viewMsg = false;
                return this.alertService.warning(data.message, 'Warning');
            } else {
                return this.setDeleteMemberSuccessResponse(data);
            }
        });
    }

    private setDeleteMemberSuccessResponse(data: any) {
        this.displayDeleteMemNote();
        this.updateDeletedMemDetailsInDataTable(data);
        return this.setDeleteMemSuccessMsg(data);
    }

    private setDeleteMemSuccessMsg(data: any) {
        this.deleteMemberModal.close();
        return this.alertService.success('Member ' + data.userId.firstName
            + ' ' + data.userId.lastName +
            ' has been deleted successfully', 'Delete Member');
    }

    private updateDeletedMemDetailsInDataTable(data: any) {
        this.newMemObj = {
        item_id: data.userId.userCode, item_text: data.userId.firstName
            + ' ' + data.userId.lastName
        };
        this.groupMemberObjList.push(this.newMemObj);
        this.memberList.splice(this.memberList.indexOf(this.selectedMember), 1);
    }

    private displayDeleteMemNote() {
        this.viewMsg = true;
        setTimeout(function () {
            this.viewMsg = false;
        }.bind(this), 5000);
    }

    private deleteMemberValidation() {
        if (this.selectedMember.userCode === null || typeof this.selectedMember.userCode === 'undefined'
            || this.selectedMember.userCode.trim() === '') {
            this.selectedMember.userCode = this.newMemberUserCode;
            this.viewMsg = false;
        }
    }

    editGroup() {
        if (this.addMemPermission !== 2) {
            this.editGroupAction();
        } else {
            return this.alertService.warning('Selected group has deactivated, you can not edit group', 'Warning');
        }
    }
    private editGroupAction() {
        this.addUpdateGroupModal.open();
        this.updateGroupName = this.selectedGroupObj.groupName;
        this.groupList.splice(this.groupList.indexOf(this.selectedGroupObjFromList), 1);
    }

    updateGroupDetails() {
        if (this.updateGroupName === null || typeof this.updateGroupName === 'undefined' || this.updateGroupName.trim() === '') {
            return this.alertService.warning('Please enter group name', 'Warning');
        } else {
            this.updateGroupValidAction();
        }
    }
    private updateGroupValidAction() {
        const payload = {
            groupName: this.updateGroupName,
            groupId: this.selectedGroupObj.groupId
        };
        this.updateGroupApiCall(payload);
    }

    private updateGroupApiCall(payload: { groupName: any; groupId: any; }) {
        this._groupService.saveGroupDetails(payload).subscribe((res) => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, 'Warning');
            } else {
                return this.setUpdateGroupSucessResponse();
            }
        });
    }

    private setUpdateGroupSucessResponse() {
        this.selectedGroupObj.groupName = this.updateGroupName;
        this.selectedGroupName = this.updateGroupName;
        this.addUpdateGroupModal.close();
        return this.alertService.success('Group has been updated successfully', 'Success');
    }

    updateMembers() {
            if (this.selectedMemberIds === null || this.selectedMemberIds === undefined || this.selectedMemberIds.length === 0) {
                return this.alertService.warning('Please select members', 'Warning');
            } else {
                this.updatememberSucessResponse();
                }
    }
    private updatememberSucessResponse() {
        this.manageGroupSpinnerMod.showSpinner();
        const payload = {
            groupId: this.selectedGroupObj.groupId,
            selectedMemberCodeList: this.selectedMemberIds,
        };
        this.updateMemberApiCall(payload);
    }

    private updateMemberApiCall(payload: { groupId: any; selectedMemberCodeList: any[]; }) {
        this._groupService.saveGroupMember(payload).subscribe(memberData => {
            const { addedMemberList, notAddedMemberList } = this.deserialiseMemberListMap(memberData);
            this.filterGroupMemberobjList(notAddedMemberList);
            return this.updatememberSucessAction(addedMemberList);
        });
    }

    private updatememberSucessAction(addedMemberList: any[]) {
        this.memberList = [];
        this.memberList = addedMemberList;
        this.selectedItems = [];
        this.selectedMemberIds = [];
        this.manageGroupSpinnerMod.hideSpinner();
        return this.alertService.success('Members has been updated successfully', 'Success');
    }

    private filterGroupMemberobjList(notAddedMemberList: any[]) {
        this.groupMemberObjList = [];
        for (let i = 0; i < notAddedMemberList.length; i++) {
            this.memObj = {
            item_id: notAddedMemberList[i].userCode, item_text: notAddedMemberList[i].firstName
                + ' ' + notAddedMemberList[i].lastName
            };
            this.groupMemberObjList.push(this.memObj);
        }
    }

    private deserialiseMemberListMap(memberData: any) {
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
        return { addedMemberList, notAddedMemberList };
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
