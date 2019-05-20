import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { AlertService } from '../../../services/alert.service';
import { PasswordService } from '../../../services/password.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss'],
  providers: [AlertService, TeamService, PasswordService]
})
export class RegisterAdminComponent implements OnInit {


  _teamService: TeamService;
  _userService: UserService;
  _loginService: LoginService;
  _passwordService: PasswordService;
  jwtToken: string;
  selectedTeam: any;
  teamArray = [];
  userNameArray = [];
  emailArray = [];
  user: any;
  firstName: any;
  lastName: any;
  userName: any;
  email: any;
  password: any;
  confirmPassword: any;
  authFlag: Boolean = false;
  newTeamName: any;
  @ViewChild('firstNameField') firstNameField: ElementRef;
  @ViewChild('lastNameField') lastNameField: ElementRef;
  @ViewChild('usernameField') usernameField: ElementRef;
  @ViewChild('passwordField') passwordField: ElementRef;
  @ViewChild('confirmPasswordField') confirmPasswordField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('teamField') teamField: ElementRef;

  constructor(teamService: TeamService , userService: UserService , loginService: LoginService ,
    public alertService: AlertService , passwordService: PasswordService) {
      this._teamService = teamService;
      this._userService = userService;
      this._loginService = loginService;
      this._passwordService = passwordService;
  }

  ngOnInit() {
       this.allEnableTeamApiCall();
  }
  private allEnableTeamApiCall() {
    this._teamService.getAllEnableTeams().subscribe(data => {
      if (data[0].warningFl) {
        return this.alertService.warning(data[0].message, 'Warning');
      } else {
        this.teamArray = data;
      }
    });
  }

  registerUser() {
      if ( this.firstName === null || typeof this.firstName === 'undefined' || this.firstName.trim() === '' ) {
        this.firstNameField.nativeElement.focus();
         return this.alertService.warning('Please enter first name' , 'Warning');
      } else  if ( this.lastName === null || typeof this.lastName === 'undefined' || this.lastName.trim() === '' ) {
        this.lastNameField.nativeElement.focus();
        return this.alertService.warning('Please enter last name', 'Warning');
      } else  if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '' ) {
        this.usernameField.nativeElement.focus();
        return this.alertService.warning('Please enter username' , 'Warning');
      } else if (this.email === null || typeof this.email === 'undefined' || this.email.trim() === '') {
        this.emailField.nativeElement.focus();
        return this.alertService.warning('Please enter email', 'Warning');
      } else  if ( this.password === null || typeof this.password === 'undefined' || this.password.trim() === '') {
        this.passwordField.nativeElement.focus();
        return this.alertService.warning('Please enter password' , 'Warning');
      } else  if ( this.confirmPassword === null || typeof this.confirmPassword === 'undefined' || this.confirmPassword.trim() === '') {
        this.confirmPasswordField.nativeElement.focus();
        return this.alertService.warning('Please enter confirm password', 'Warning');
      } else if (this.newTeamName === null || typeof this.newTeamName === 'undefined' || this.newTeamName.trim() === '' ) {
        this.teamField.nativeElement.focus();
        return this.alertService.warning('Please enter team', 'Warning');
      } else {
          const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
          if (!EMAIL_REGEXP.test(this.email)) {
            return this.emailValidation();
          } else if (this.password !== this.confirmPassword) {
             return this.passwordvalidation();
          } else {
             const payload =  this.createSaveUserPayload();
             this.saveuserApiCall(payload);
           }
       }
  }

  private saveuserApiCall(payload: { email: any; password: string; name: any; firstName: any; lastName: any;
     'meetingPermissionStatus': { status: string; }; }) {
    this._userService.saveUserDetails(payload, this.newTeamName).subscribe(data => {
      if (data.json()[0].warningFl === true) {
        return this.userValidationAction(data);
      } else {
        return this.saveUserSuccessAction(data);
      }
    });
  }

  private emailValidation() {
    this.emailField.nativeElement.focus();
    return this.alertService.warning('Please enter valid email', 'Warning');
  }

  private passwordvalidation() {
    this.passwordField.nativeElement.focus();
    this.confirmPasswordField.nativeElement.focus();
    return this.alertService.warning('Password and Confirm Password does not match.', 'Warning');
  }

  private saveUserSuccessAction(data: any) {
    this.clearAllField();
    this.teamArray.push(data.json().team);
    return this.alertService.success('Admin has registered successfully', 'Success');
  }

  private userValidationAction(data: any) {
    if (data.json()[0].message === 'UserName Already Exist') {
      this.usernameField.nativeElement.focus();
    } else if (data.json()[0].message === 'Team is disable , kindly change team name') {
      this.teamField.nativeElement.focus();
      return this.alertService.warning(data.json().message, 'Warning');
    } else if (data.json()[0].message === 'Email already exist') {
      this.emailField.nativeElement.focus();
    }
    return this.alertService.warning(data.json()[0].message, 'Warning');
  }

  private createSaveUserPayload() {
    return {
      email: this.email,
      password: this._passwordService.encrypted(this.password),
      name: this.userName,
      firstName: this.firstName.substring(0, 1).toUpperCase() + this.firstName.substring(1),
      lastName: this.lastName.substring(0, 1).toUpperCase() + this.lastName.substring(1),
      'meetingPermissionStatus': { status: 'ACTIVE' }
    };
  }

 clearAllField() {
   this.userName = '';
   this.firstName = '';
   this.password = '';
   this.confirmPassword = '';
   this.lastName = '';
   this.email = '';
   this.newTeamName = '';
 }
}
