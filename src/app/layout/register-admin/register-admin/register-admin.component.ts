import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service'
import { AlertService } from '../../../services/alert.service';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss'],
  providers: [AlertService,TeamService]
})
export class RegisterAdminComponent implements OnInit {

  selectedTeam: any;
  teamArray = [];
  userNameArray = [];
  emailArray = [];
  _teamService: TeamService;
  _userService: UserService;
  _loginService: LoginService;
  jwtToken: string;
  user: any;
  firstName: any;
  lastName: any;
  userName: any;
  email: any;
  password: any;
  confirmPassword: any;
  authFlag: boolean = false;
  newTeamName: any;
  constructor(teamService: TeamService , userService: UserService , loginService: LoginService ,public alertService: AlertService ) {
      this._teamService = teamService;
      this._userService = userService;
      this._loginService = loginService;
  }

  ngOnInit() {
      // this.selectedTeam = 'Select Team';
       this._teamService.getAllEnableTeams().subscribe(data => {
         if(data.warningFl){
          return this.alertService.warning(data.json().message,"Warning");   
         }else{
           this.teamArray = data;
          }
       });
  }
  registerUser() {
      if(this.firstName === "" || this.firstName === null || typeof this.firstName === "undefined"){
         return this.alertService.warning("Please enter firstname","Warning");
      }else  if(this.lastName === "" || this.lastName === null || typeof this.lastName === "undefined"){
        return this.alertService.warning("Please enter lastName","Warning");
      }else  if(this.userName === "" || this.userName === null || typeof this.userName === "undefined"){
        return this.alertService.warning("Please enter username","Warning");
      }else  if(this.email === "" || this.email === null || typeof this.email === "undefined"){
        return this.alertService.warning("Please enter email","Warning");
      } else  if(this.password === "" || this.password === null || typeof this.password === "undefined"){
        return this.alertService.warning("Please enter password","Warning");
      }else  if(this.confirmPassword === "" || this.confirmPassword === null || typeof this.confirmPassword === "undefined"){
        return this.alertService.warning("Please enter confirmpassword","Warning");
      }else  if(this.newTeamName === "" || this.newTeamName === null || typeof this.newTeamName === "undefined"){
        return this.alertService.warning("Please enter team","Warning");
      }
      else{
          const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
          const temporaryUserName = this.userNameArray.indexOf(this.userName);
          const temporaryEmail = this.emailArray.indexOf(this.email);
      
          if (!EMAIL_REGEXP.test(this.email)) {
            return this.alertService.warning("Please enter valid email","Warning");
          }
          else if(this.password != this.confirmPassword){
            return this.alertService.warning("Password and Confirm Password does not match.","Warning");        
          }
          else{
              let duplicateUserNameFlag ;
              let exceptionFlag;
          const payload =  {
              "email": this.email,
              "password": this.password,
              "name": this.userName,
              "lastName": this.lastName,
              "firstName": this.firstName,
              "status.onlineStatus": true,
              //"team.teamName": this.newTeamName
          }
      this._userService.saveUserDetails(payload,this.newTeamName).subscribe(data => {
          duplicateUserNameFlag = data.json().warningFl;
          exceptionFlag = data.json().errorFl;
          if(duplicateUserNameFlag == true) {
            return this.alertService.warning("Username already exist","Warning");
          }else if(exceptionFlag == true) {
            return this.alertService.warning(data.json().message,"Warning");
          }else{
            this.clearAllField();
            return this.alertService.success("Admin has been registered successfully","Success");
          }
      });
  }
  }
  }
  selectTeam(team){
    alert(team.teamName);
  }
 clearAllField(){
   this.userName = "";
   this.firstName = "";
   this.password = "";
   this.confirmPassword = "";
   this.lastName = "";
   this.email = "";
   this.newTeamName = "";
 }
}
