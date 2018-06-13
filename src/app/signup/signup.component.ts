import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TeamService } from '../services/team.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [TeamService],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    selectedTeam: any;
    teamArray = [];
    userNameArray = [];
    emailArray = [];
    _teamService: TeamService;
    _userService: UserService;
    _loginService: LoginService;
    user: any;
    firstName: any;
    lastName: any;
    userName: any;
    email: any;
    password: any;
    confirmPassword: any;
    showAddMemberSuccess: boolean = false;
    showAddMemberFirstName: boolean = false;
    showAddMemberUserName: boolean = false;
    showAddMemberPassword: boolean = false;
    showAddMemberEmail: boolean = false;
    showAddMemberConfirmPass: boolean = false;
    showAddMemberpasswordMatch: boolean = false;
    showAddMemberValidEmail: boolean = false;
    showAddMemberDuplicateUserName: boolean = false;
    showAddMemberDuplicateEmail: boolean = false;

    constructor(teamService: TeamService , userService: UserService , loginService: LoginService ,private router: Router) {
        this._teamService = teamService;
        this._userService = userService;
        this._loginService = loginService;
    }

    ngOnInit() {
        this.selectedTeam = 'Select Team';
        this._teamService.getAllEnableTeams().subscribe(data => {
            this.teamArray = data.json();
        });
        this._loginService.getAllMemUserNameList().subscribe(data => {
            this.userNameArray = data.json();
        });
        this._loginService.getAllMemEmailList().subscribe(data => {
            this.emailArray = data.json();
        });
    }
    registerUser() {
        if(this.firstName === "" || this.firstName === null || typeof this.firstName === "undefined"){
            this.showAddMemberFirstName = true;
            setTimeout(function() {
                this.showAddMemberFirstName = false;
            }.bind(this), 5000);
        } else  if(this.userName === "" || this.userName === null || typeof this.userName === "undefined"){
            this.showAddMemberUserName = true;
            setTimeout(function() {
                this.showAddMemberUserName = false;
            }.bind(this), 5000);
        }else  if(this.email === "" || this.email === null || typeof this.email === "undefined"){
            this.showAddMemberEmail = true;
            setTimeout(function() {
                this.showAddMemberEmail = false;
            }.bind(this), 5000);
        } else  if(this.password === "" || this.password === null || typeof this.password === "undefined"){
            this.showAddMemberPassword = true;
            setTimeout(function() {
                this.showAddMemberPassword = false;
            }.bind(this), 5000);
        }else  if(this.confirmPassword === "" || this.confirmPassword === null || typeof this.confirmPassword === "undefined"){
            this.showAddMemberConfirmPass = true;
            setTimeout(function() {
                this.showAddMemberConfirmPass = false;
            }.bind(this), 5000);
        }
        else{
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            const temporaryUserName = this.userNameArray.indexOf(this.userName);
            const temporaryEmail = this.emailArray.indexOf(this.email);
            if(temporaryUserName != -1){
                this.showAddMemberDuplicateUserName = true;
                setTimeout(function() {
                    this.showAddMemberDuplicateUserName = false;
                }.bind(this), 5000);
                this.userName = '';
            }
            else if(temporaryEmail != -1) {
                this.showAddMemberDuplicateEmail = true;
                setTimeout(function() {
                    this.showAddMemberDuplicateEmail = false;
                }.bind(this), 5000);
                this.email = '';
            }
            else if (!EMAIL_REGEXP.test(this.email)) {
                this.showAddMemberValidEmail = true;
                setTimeout(function() {
                    this.showAddMemberValidEmail = false;
                }.bind(this), 5000);
                this.email = '';
            }
            else if(this.password != this.confirmPassword){
                this.confirmPassword = '';
                this.showAddMemberpasswordMatch = true;
                setTimeout(function() {
                    this.showAddMemberpasswordMatch = false;
                }.bind(this), 5000);               
            }
            else{
            const payload =  {
                "email": this.email,
                "password": this.password,
                "name": this.userName,
                "lastName": this.lastName,
                "firstName": this.firstName,
                "status.onlineStatus": true
            }
            this.showAddMemberFirstName = false;
            this.showAddMemberUserName = false;
            this.showAddMemberPassword = false;
            this.showAddMemberEmail = false;
            this.showAddMemberpasswordMatch =false;
            this.showAddMemberValidEmail = false;
            this.showAddMemberSuccess = true;
            setTimeout(function() {
                this.edited = false;
                console.log(this.showAddMemberSuccess);
            }.bind(this), 5000);
   
        this._userService.saveUserDetails(payload).subscribe(data => {
          
        });
        this.showAddMemberSuccess = true;
        setTimeout(function() {
            this.showAddMemberSuccess = false;
        }.bind(this), 5000);
        this.router.navigate(['/dashboard']);
    }
    }
    }
    // onChangeTeam(teamName) {
    //     this.selectedTeam = teamName;
    // }

}
