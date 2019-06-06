import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { PasswordService } from '../../../services/password.service';
import { PaginationInstance } from 'ngx-pagination';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { ErrorMessageConstants, TypeOfError , SuccessMessage , StaticLabels} from '../../../shared/errorMessageConstants';
@Component({
    selector: 'app-manage-team',
    templateUrl: './manage-team.component.html',
    styleUrls: ['./manage-team.component.scss'],
    providers: [TeamService, AlertService, PasswordService],
})
export class ManageTeamComponent implements OnInit {
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
    newTeamName: any;
    i: number;
    teamCode: string;
    updatedMeetingPermissionStatus: any;
    searchTableText: string;
    _teamService: TeamService;
    _userService: UserService;
    _passwordService: PasswordService;
    userPermissionList = [];
    userPermissionMemberList = [];
    filterMemberList = [];
    teamList = [];
    selectedTeamName: any;
    selectedTeamStatus: any;
    user: any = {};
    firstName: any;
    lastName: any;
    userName =  '';
    email: any;
    password = '';
    loggedInUser: any;
    selectedTeamObj: any;
    searchTeam: any;
    showSelectedTeam: boolean;
    updateTeamName: any;
    selectedUserPermissionObj: any;
    selectedNewTeamObj: any;
    teamArray = [];
    updatedFirstName: any;
    updatedLastName: any;
    updatedEmail;
    updatedTeamName: any;
    updatedUserStatus: boolean;
    updatedUserCode: any;
    selectedMember: any;
    newMemberUserCode: any;
    deleteMemberFlag = 1;
    addMemPermission = 1;
    meetingPermissionStatus: any;
    selectedMemIndex: any;
    selectedTeamIndex: any;
    updateProfileImgPath: any;
    @ViewChild('emailField') emailField: ElementRef;
    @ViewChild('teamNameField') teamNameField: ElementRef;
    @ViewChild('addMemField') addMemField: ElementRef;
    @ViewChild('addTeamField') addTeamField: ElementRef;
    @ViewChild('editTeamField') editTeamField: ElementRef;
    @ViewChild('deleteTeamField') deleteTeamField: ElementRef;
    @ViewChild('manageTeamSpinner') manageTeamSpinnerMod: SpinnerComponent;
    @ViewChild('addNewTeamModal') public addNewTeamModal: CustomModalComponent;
    newTeam: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Team',
        smallHeading: 'You can add new team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
        Button2Content: ''
    };
    @ViewChild('addUpdateTeamModal') public addUpdateTeamModal: CustomModalComponent;
    updateTeam: CustomModalModel = {
        titleIcon: '<i class="fa fa-pencil-square-o"></i>',
        title: 'Update Team',
        smallHeading: 'You can update team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Team',
        Button2Content: ''
    };
    @ViewChild('enableTeamModal') public enableTeamModal: CustomModalComponent;
    enableTeam: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Enable Team',
        smallHeading: 'You can ebale team here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Enable Team',
        Button2Content: ''
    };
    @ViewChild('disableTeamModal') public disableTeamModal: CustomModalComponent;
    disableTeam: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Disable Team',
        smallHeading: 'You can disable team here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Disable Team',
        Button2Content: ''
    };
    @ViewChild('deleteTeamModal') public deleteTeamModal: CustomModalComponent;
    deleteTeam: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Delete Team',
        smallHeading: 'You can delete team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete Team',
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
    @ViewChild('UpdateMemberModal') public UpdateMemberModal: CustomModalComponent;
    updateMember: CustomModalModel = {
        titleIcon: '<i class="fa fa-pencil-square-o"></i>',
        title: 'Update Member',
        smallHeading: 'You can update member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Member',
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

    constructor(teamService: TeamService, userService: UserService, public alertService: AlertService, passwordService: PasswordService) {
        this._teamService = teamService;
        this._userService = userService;
        this._passwordService = passwordService;
    }

    ngOnInit() {
        this.showSelectedTeam = false;
        this.selectedTeamObj = null;
        this.loggedInUserIdApiCall();
    }
    private loggedInUserIdApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                this.loggedInUser = data;
                this.getTeamsByLoggedInUser();
                this.getMembersByLoggedInUser();
            }
        });
    }

    private getMembersByLoggedInUser() {
        this._teamService.getMemberListByLoggedInUserId().subscribe(memberData => {
            if (memberData[0].errorFl || memberData[0].warningFl) {
                this.userPermissionMemberList = [];
            } else {
                this.userPermissionMemberList = memberData;
            }
        });
    }

    private getTeamsByLoggedInUser() {
        this._teamService.getTeamsByLoggedInUserId().subscribe(teamData => {
            if (teamData[0].errorFl || teamData[0].warningFl) {
                this.userPermissionList = [];
                this.manageTeamSpinnerMod.hideSpinner();
            } else {
                this.userPermissionList = teamData;
                this.manageTeamSpinnerMod.hideSpinner();
            }
        });
    }

    displayTeamDetails(userPermission, index) {
        this.manageTeamSpinnerMod.showSpinner();
        if (userPermission.team.teamCode === '' || userPermission.team.teamCode === null ||
            typeof userPermission.team.teamCode === StaticLabels.Undefined) {
            this.selectedTeamObj = this.selectedNewTeamObj;
        } else {
            this.selectedTeamObj = userPermission.team;
        }
        this.filterMembersAndSetOtherDetails(userPermission, index);
    }
    private filterMembersAndSetOtherDetails(userPermission: any, index: any) {
        this.showSelectedTeam = true;
        this.selectedTeamName = userPermission.team.teamName;
        this.selectedTeamStatus = userPermission.team.status.status;
        this.filtermembers(userPermission);
        this.manageTeamSpinnerMod.hideSpinner();
        this.selectedUserPermissionObj = userPermission;
        this.setMeetingPermission();
        this.selectedTeamIndex = index;
    }

    private setMeetingPermission() {
        if (this.selectedTeamObj.status.status === StaticLabels.Cancel) {
            this.addMemPermission = 2;
        } else {
            this.addMemPermission = 1;
        }
    }

    private filtermembers(userPermission: any) {
        this.filterMemberList = [];
        for (let i = 0; i < this.userPermissionMemberList.length; i++) {
            if (this.userPermissionMemberList[i].team.id === userPermission.team.id) {
                this.filterMemberList.push(this.userPermissionMemberList[i]);
            }
        }
    }

    // to open modal popup
    open() {
        this.addNewTeamModal.open();
    }
    openMemberPopup() {
        if (this.selectedTeamObj === '' || this.selectedTeamObj === null || typeof this.selectedTeamObj === StaticLabels.Undefined) {
            return this.alertService.warning(ErrorMessageConstants.TeamName, TypeOfError.Warning);
        } else {
            if (this.addMemPermission !== 2) {
                this.addNewMemberModal.open();
            } else {
                return this.alertService.warning(ErrorMessageConstants.AlreadyDeactivateAndAddMember, TypeOfError.Warning);
            }
        }
    }
    addTeam() {
        if (this.newTeamName === null || typeof this.newTeamName === StaticLabels.Undefined || this.newTeamName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.TeamName, TypeOfError.Warning);
        } else {
            this.saveTeamDetailsApiCall();
        }
    }

    private saveTeamDetailsApiCall() {
        const payload = { 'teamName': this.newTeamName, 'userCode': this.loggedInUser.userCode };
        this._teamService.saveTeamDetails(payload).subscribe((res) => {
            if (res.errorFl === true || res.warningFl === true) {
                this.newTeamName = '';
                return this.alertService.warning(res.message, TypeOfError.Warning);
            } else {
                return this.saveTeamSuccessAction(res);
            }
        });
    }

    private saveTeamSuccessAction(res: any) {
        const teamRes = { team: res.team };
        this.userPermissionList.push(teamRes);
        this.newTeamName = '';
        this.teamNameField.nativeElement.focus();
        this.selectedNewTeamObj = res.team;
        return this.alertService.success(SuccessMessage.SaveTeam, SuccessMessage.SuccessHeader);
    }

    // add new member
    addMember() {
        const NAME_REGEXP = /^[a-zA-Z ]+$/i;
        if (this.firstName === null || typeof this.firstName === StaticLabels.Undefined || this.firstName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.FirstName, TypeOfError.Warning);
        } else if (!NAME_REGEXP.test(this.firstName)) {
            return this.alertService.warning(ErrorMessageConstants.EnterAlphabatesOnly, TypeOfError.Warning);
         }  else if (this.lastName === null || typeof this.lastName === StaticLabels.Undefined || this.lastName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.LastName, TypeOfError.Warning);
        } else if (!NAME_REGEXP.test(this.lastName)) {
            return this.alertService.warning(ErrorMessageConstants.EnterAlphabatesOnly, TypeOfError.Warning);
         } else if (this.email === null || typeof this.email === StaticLabels.Undefined || this.email.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.Email, TypeOfError.Warning);
        } else if (this.userName === null || typeof this.userName === StaticLabels.Undefined || this.userName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.EnterUserName, TypeOfError.Warning);
        } else if (this.password === null || typeof this.password === StaticLabels.Undefined || this.password.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.EnterPassword, TypeOfError.Warning);
        } else {
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (!EMAIL_REGEXP.test(this.email)) {
                this.emailField.nativeElement.focus();
                return this.alertService.warning(ErrorMessageConstants.ValidEmail, TypeOfError.Warning);
            } else {
                const { payload, meetingCurrentDisplayStatus } = this.createMemberPayload();
                this.saveMemberDetailsApiCall(payload, meetingCurrentDisplayStatus);
            }
        }
    }
    private saveMemberDetailsApiCall(payload: { 'email': any; 'name': any; 'password': string; 'firstName': any; 'lastName': any;
     'status.onlineStatus': boolean; 'meetingPermissionStatus': { status: any; }; 'registeredBy': any; 'team': any; },
      meetingCurrentDisplayStatus: any) {
        this._userService.saveMemberDetails(payload).subscribe((res) => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, TypeOfError.Warning);
            } else {
                const memObj = this.createMemberObj(res, meetingCurrentDisplayStatus);
                return this.setMemberSuccessDetails(memObj, res);
            }
        });
    }

    private setMemberSuccessDetails(memObj: { userId: { firstName: any; lastName: any; email: any; userCode: any;
         status: { status: string; }; meetingPermissionStatus: { status: any; }; }; team: any; }, res: any) {
        this.userPermissionMemberList.push(memObj);
        this.filterMemberList.push(memObj);
        this.clearMemPopupField();
        this.meetingPermissionStatus = false;
        this.newMemberUserCode = res.userCode;
        return this.alertService.success(SuccessMessage.SaveMember, SuccessMessage.SuccessHeader);
    }

    private createMemberObj(res: any, meetingCurrentDisplayStatus: any) {
        return {
            userId: {
                firstName: res.firstName, lastName: res.lastName, email: this.email, userCode: res.userCode,
                status: { status: StaticLabels.Active }, meetingPermissionStatus: { status: meetingCurrentDisplayStatus }
            },
            team: this.selectedTeamObj
        };
    }

    private createMemberPayload() {
        const meetingCurrentDisplayStatus = this.getStatusByUser(this.meetingPermissionStatus);
        const payload = {
            'email': this.email,
            'name': this.userName,
            'password': this._passwordService.encrypted(this.password),
            'firstName': this.firstName.substring(0, 1).toUpperCase() + this.firstName.substring(1),
            'lastName': this.lastName.substring(0, 1).toUpperCase() + this.lastName.substring(1),
            'status.onlineStatus': false,
            'meetingPermissionStatus': { status: meetingCurrentDisplayStatus },
            'registeredBy': this.loggedInUser.userCode,
            'team': this.selectedTeamObj
        };
        return { payload, meetingCurrentDisplayStatus };
    }

    editTeam(index) {
        if (this.addMemPermission !== 2) {
            this.addUpdateTeamModal.open();
            this.updateTeamName = this.selectedUserPermissionObj.team.teamName;
            this.userPermissionList.splice(this.userPermissionList.indexOf(this.selectedUserPermissionObj), 1);
        } else {
            return this.alertService.warning(ErrorMessageConstants.AlreadyDeactivatedTeamAndEdit, TypeOfError.Warning);
        }
    }
    updateTeamDetails() {
        if (this.updateTeamName === null || typeof this.updateTeamName === StaticLabels.Undefined || this.updateTeamName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.TeamName, TypeOfError.Warning);
        } else {
            const payload = {
                'teamName': this.updateTeamName, 'userCode': this.loggedInUser.userCode,
                'teamCode': this.selectedTeamObj.teamCode , status: this.selectedTeamObj.status
            };
            this.saveTeamApiCall(payload);
        }
    }
    private saveTeamApiCall(payload: { 'teamName': any; 'userCode': any; 'teamCode': any; status: any; }) {
        this._teamService.saveTeamDetails(payload).subscribe((res) => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, TypeOfError.Warning);
            } else {
                return this.setSaveTeamSuccessResponse();
            }
        });
    }

    private setSaveTeamSuccessResponse() {
        this.selectedTeamObj.teamName = this.updateTeamName;
        this.selectedTeamName = this.updateTeamName;
        this.selectedUserPermissionObj.team.teamName = this.updateTeamName;
        this.addUpdateTeamModal.close();
        return this.alertService.success(SuccessMessage.UpdateTeam, SuccessMessage.SuccessHeader);
    }

    deleteSelectedTeam() {
        if (this.addMemPermission !== 2) {
            this.deleteTeamModal.open();
            this.userPermissionList.splice(this.userPermissionList.indexOf(this.selectedUserPermissionObj), 1);
        } else {
            return this.alertService.warning(ErrorMessageConstants.AlreadyTeamDeactivate, TypeOfError.Warning);
        }
    }
    enableSelectedTeam() {
        if (this.addMemPermission !== 2) {
            this.enableTeamModal.open();
            this.userPermissionList.splice(this.userPermissionList.indexOf(this.selectedUserPermissionObj), 1);
        } else {
            return this.alertService.warning(ErrorMessageConstants.AlreadyTeamDeactivate, TypeOfError.Warning);
        }
    }
    disableSelectedTeam() {
        if (this.addMemPermission !== 2) {
            this.disableTeamModal.open();
            this.userPermissionList.splice(this.userPermissionList.indexOf(this.selectedUserPermissionObj), 1);
        } else {
            return this.alertService.warning(ErrorMessageConstants.AlreadyTeamDeactivate, TypeOfError.Warning);
        }
    }
    deleteTeamDetails() {
        const payload = { 'teamCode': this.selectedTeamObj.teamCode,
                          'status': 'CANCEL' };
        this._teamService.deleteTeam(payload).subscribe(res => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, TypeOfError.Warning);
            } else {
                return this.deleteTeamSuccessResponse();
            }
        });
    }
    enableTeamDetails() {
        const payload = { 'teamCode': this.selectedTeamObj.teamCode,
                          'status': 'ACTIVE' };
        this._teamService.deleteTeam(payload).subscribe(res => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, TypeOfError.Warning);
            } else {
                return this.enableTeamSuccessResponse();
            }
        });
    }
    disableTeamDetails() {
        const payload = { 'teamCode': this.selectedTeamObj.teamCode,
                           'status': 'INACTIVE' };
                        //    this.userPermissionList.splice(this.selectedTeamIndex, 1);
        this._teamService.deleteTeam(payload).subscribe(res => {
            if (res.errorFl === true || res.warningFl === true) {
                return this.alertService.warning(res.message, TypeOfError.Warning);
            } else {
                return this.disableTeamSuccessResponse();
            }
        });
    }
    private deleteTeamSuccessResponse() {
        this.filterMemberList = [];
        this.showSelectedTeam = false;
        this.deleteTeamModal.close();
        return this.alertService.success(SuccessMessage.DeleteTeam, SuccessMessage.SuccessHeader);
    }
    private enableTeamSuccessResponse() {
        this.selectedUserPermissionObj = { team: { status: { status: StaticLabels.Active },
        teamName: this.selectedTeamName }};
        this.selectedTeamStatus = this.selectedUserPermissionObj.team.status.status;
        this.enableTeamModal.close();
        return this.alertService.success('Team has enabled successfully', SuccessMessage.SuccessHeader);
    }
    private disableTeamSuccessResponse() {
        this.selectedUserPermissionObj = { team: { status: { status: StaticLabels.InActive },
        teamName: this.selectedTeamName }};
        this.selectedTeamStatus = this.selectedUserPermissionObj.team.status.status;
        this.disableTeamModal.close();
        return this.alertService.success('Team has disabled successfully', SuccessMessage.SuccessHeader);
    }
    editMember(member) {
        this.updateUserAndMeetingStatus(member);
        const index = this.filterMemberList.indexOf(member);
        this.openPopUpAndRemoveEntryFromTable(index);
        this.setUpdatedvaluesToModel(member, index);
    }
    private openPopUpAndRemoveEntryFromTable(index: number) {
        this.filterMemberList.splice(index, 1);
        this.UpdateMemberModal.open();
    }

    private setUpdatedvaluesToModel(member: any, index: number) {
        this.updatedFirstName = member.userId.firstName;
        this.updatedLastName = member.userId.lastName;
        this.updatedEmail = member.userId.email;
        this.updatedUserCode = member.userId.userCode;
        this.updateProfileImgPath = member.userId.profileImgPath;
        this.selectedMember = member;
        this.selectedMemIndex = index;
    }

    private updateUserAndMeetingStatus(member: any) {
        if (member.userId.status.status === StaticLabels.Active) {
            this.updatedUserStatus = true;
        } else {
            this.updatedUserStatus = false;
        }
        if (member.userId.meetingPermissionStatus.status === StaticLabels.Active) {
            this.updatedMeetingPermissionStatus = true;
        } else {
            this.updatedMeetingPermissionStatus = false;
        }
    }

    updateMemberDetails() {
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        const NAME_REGEXP = /^[a-zA-Z ]+$/i;
        if (this.updatedUserCode === null || typeof this.updatedUserCode === StaticLabels.Undefined || this.updatedUserCode.trim() === '') {
            this.updatedUserCode = this.newMemberUserCode;
        } else if (this.updatedFirstName === null || typeof this.updatedFirstName === StaticLabels.Undefined ||
            this.updatedFirstName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.FirstName, TypeOfError.Warning);
        } else if (!NAME_REGEXP.test(this.updatedFirstName)) {
            return this.alertService.warning(ErrorMessageConstants.EnterAlphabatesOnly, TypeOfError.Warning);
         } else if (this.updatedLastName === null || typeof this.updatedLastName === StaticLabels.Undefined ||
            this.updatedLastName.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.LastName, TypeOfError.Warning);
        } else if (!NAME_REGEXP.test(this.updatedLastName)) {
            return this.alertService.warning(ErrorMessageConstants.EnterAlphabatesOnly, TypeOfError.Warning);
        } else if (this.updatedEmail === null || typeof this.updatedEmail === StaticLabels.Undefined || this.updatedEmail.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.Email, TypeOfError.Warning);
        } else if (!EMAIL_REGEXP.test(this.updatedEmail)) {
            this.emailField.nativeElement.focus();
            return this.alertService.warning(ErrorMessageConstants.ValidEmail, TypeOfError.Warning);
        }
        const payload = this.setUpdateUserPayload();
        this.updateUserApiCall(payload);
    }

    private updateUserApiCall(payload: { firstName: any; lastName: any; email: any; userCode: any; status: { status: any; };
         team: any; meetingPermissionStatus: { status: any; }; }) {
        this._userService.updateUserDetails(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                const memObj = this.getMemObj(data);
                return this.updateUserAction(data, memObj);
            }
        });
    }

    private updateUserAction(data: any, memObj: { userId: { firstName: any; lastName: any; email: any; userCode: any;
         status: { status: any; }; meetingPermissionStatus: { status: any; }; team: any; }; }) {
        this.selectedMember = data;
        this.filterMemberList.splice(this.selectedMemIndex, 0, memObj);
        this.UpdateMemberModal.close();
        this.filteruserPermissionMemberList(data);
        return this.alertService.success('Member ' + data.firstName + ' ' + data.lastName +
            ' has updated successfully', SuccessMessage.SuccessHeader);
    }

    private getMemObj(data: any) {
        return {
            userId: {
                firstName: data.firstName, lastName: data.lastName, email: data.email, userCode: data.userCode,
                status: { status: data.status.status }, meetingPermissionStatus: { status: data.meetingPermissionStatus.status },
                team: data.team.teamName
            }
        };
    }

    private filteruserPermissionMemberList(data: any) {
        for (let i = 0; i < this.userPermissionMemberList.length; i++) {
            if (this.userPermissionMemberList[i].userId.userCode === data.userCode) {
                this.userPermissionMemberList[i].userId = data;
            }
        }
    }

    private setUpdateUserPayload() {
        const currentDisplayStatus = this.getStatusByUser(this.updatedUserStatus);
        const currentDisplayMeetingStatus = this.getStatusByUser(this.updatedMeetingPermissionStatus);
        const payload = {
            firstName: this.updatedFirstName.substring(0, 1).toUpperCase() + this.updatedFirstName.substring(1),
            lastName: this.updatedLastName.substring(0, 1).toUpperCase() + this.updatedLastName.substring(1),
            email: this.updatedEmail,
            userCode: this.updatedUserCode,
            status: { status: currentDisplayStatus },
            team: this.selectedTeamObj,
            profileImgPath: this.selectedMember.userId.profileImgPath,
            meetingPermissionStatus: { status: currentDisplayMeetingStatus }
        };
        return payload;
    }

    private getStatusByUser(updatedStaus) {
        let currentDisplayStatus;
        if (updatedStaus === true) {
            currentDisplayStatus = StaticLabels.Active;
        } else {
            currentDisplayStatus = StaticLabels.InActive;
        }
        return currentDisplayStatus;
    }

    deleteMemberPopup(member) {
        if (member.userId.status.status === StaticLabels.Active) {
            this.setActiveMemStatus(member);
        } else {
            return this.alertService.warning('Member ' + member.userId.firstName + ' ' + member.userId.lastName +
                '  is already inactive', 'Inactive Member');
        }
        this.selectedMemIndex = this.filterMemberList.indexOf(member);
        this.selectedMember = member;
    }
    private setActiveMemStatus(member: any) {
        this.deleteMemberModal.open();
        this.selectedMember = member;
        this.filterMemberList.splice(this.filterMemberList.indexOf(member), 1);
    }

    deleteMemberDetails() {
        this.setSelectedMemberForDelete();
        const payload = { userCode: this.selectedMember.userId.userCode };
        this.deleteMemApiCall(payload);
    }

    private deleteMemApiCall(payload: { userCode: any; }) {
        this._userService.deleteUser(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            }  else {
                return this.setDeleteMemberSuccessAction(data);
            }
        });
    }

    private setDeleteMemberSuccessAction(data: any) {
        this.deleteMemberFlag = 2;
        this.cancelDeletePopup(1);
        this.filteruserPermissionMemberList(data);
        return this.alertService.success('Member ' + data.firstName + ' ' + data.lastName +
            ' has deleted successfully', 'Delete Member');
    }

    private setSelectedMemberForDelete() {
        if (this.selectedMember.userId.userCode === null || typeof this.selectedMember.userId.userCode === StaticLabels.Undefined
            || this.selectedMember.userId.userCode.trim() === '') {
            this.selectedMember.userId.userCode = this.newMemberUserCode;
        }
    }

    private selectedmemObj(obj, editDeletelag, noFlag) {
        let statusval ;
        if (noFlag === 1 || (editDeletelag === 2 && noFlag === 2)) {
            statusval = StaticLabels.InActive;
            this.deleteMemberFlag = 1;
        } else if (editDeletelag === 1) {
            statusval = obj.userId.status.status;
        }
        return {
            userId: {
                firstName: obj.userId.firstName, lastName: obj.userId.lastName, email: obj.userId.email,
                status: { status: statusval}, meetingPermissionStatus: { status: obj.userId.meetingPermissionStatus.status },
                userCode: obj.userId.userCode}, team: this.selectedTeamObj
        };
    }

    onPageChange(number: number) {
        this.config.currentPage = number;
    }
    // close team modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'addNewTeam':
                this.addNewTeamModal.close();
                break;
            case 'addNewMember':
                this.clearMemPopupField();
                this.addNewMemberModal.close();
                break;
        }
    }
    cancelDeletePopup(noFlag) {
        if (noFlag === 1) {
            this.deleteMemberModal.close();
        } else {
            const memObj = this.selectedmemObj(this.selectedMember, this.deleteMemberFlag, noFlag);
            this.filterMemberList.splice(this.selectedMemIndex, 0, memObj);
        }
    }
    teamCloseEditPopup() {
        this.userPermissionList.splice(this.selectedTeamIndex , 0 , this.selectedUserPermissionObj);
    }
    teamCloseDeletePopup(flag) {
        if (flag === 2 && this.showSelectedTeam === true) {
            this.userPermissionList.splice(this.selectedTeamIndex , 0 , this.selectedUserPermissionObj);
        } else {
            this.deleteTeamModal.close();
        }
    }
    teamCloseDisablePopup(flag) {
        if (flag === 2 && this.showSelectedTeam === true) {
            this.userPermissionList.splice(this.selectedTeamIndex , 0 , this.selectedUserPermissionObj);
        } else {
            this.disableTeamModal.close();
        }
    }
    teamCloseEnablePopup(flag) {
        if (flag === 2 && this.showSelectedTeam === true) {
            this.userPermissionList.splice(this.selectedTeamIndex , 0 , this.selectedUserPermissionObj);
        } else {
            this.enableTeamModal.close();
        }
    }
    cancelEditPopup() {
        const memObj = this.selectedmemObj(this.selectedMember, 1, 2);
        this.filterMemberList.splice(this.selectedMemIndex, 0, memObj);
    }
    clearTeamPopupField() {
        this.newTeamName = '';
    }
    clearMemPopupField() {
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.meetingPermissionStatus = false;
    }
}
