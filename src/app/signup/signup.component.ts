import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TeamService } from '../services/team.service';
import { UserService } from '../services/user.service';

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
    _teamService: TeamService;
    _userService: UserService;
    user: any;
    firstName: any;
    lastName: any;
    userName: any;
    email: any;
    password: any;
    showAddMemberSuccess: boolean = false;

    constructor(teamService: TeamService , userService: UserService) {
        this._teamService = teamService;
        this._userService = userService;
    }

    ngOnInit() {
        this.selectedTeam = 'Select Team';
        this._teamService.getAllEnableTeams().subscribe(data => {
            this.teamArray = data.json();
        });
    }
    registerUser(email,firstName,lastName,userName,password) {
        const payload =  {
             "email": this.email,
             "password": this.password,
             "name": this.userName,
             "lastName": this.lastName,
             "firstName": this.firstName,
             "status.onlineStatus": true
         }
        this._userService.saveUserDetails(payload).subscribe(data => {
          
        });
        this.showAddMemberSuccess = true;
        setTimeout(function() {
            this.showAddMemberSuccess = false;
        }.bind(this), 5000);
       
    }
    // onChangeTeam(teamName) {
    //     this.selectedTeam = teamName;
    // }

}
