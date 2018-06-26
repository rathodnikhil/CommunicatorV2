import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit, OnDestroy {
    _loginService: LoginService;
    user = {};
    _userService: UserService;
    jwtToken: any;
    authFlag: boolean;
    userNameFlag: boolean;
    passwordFlag: boolean;
    userName: any;
    password: any;
    passwordMacthFlag: boolean;
    constructor(public router: Router, loginService: LoginService, userService: UserService) {
        this._loginService = loginService;
        this._userService = userService;
    }

    ngOnInit() {
      //  this.onLoggedin();
    }

    async onLoggedin() {
        const userid = '123';
        const abc = await this._loginService
            .authUser(userid)
            .subscribe(
                data =>
                    (this.user = {
                        username: data['username']
                    })
            );
          
        //localStorage.setItem('isLoggedin', 'true');
    }
    ngOnDestroy(): void {
        //  this._loginService.dest
    }

      login(userName , password) {
        if(userName === "" || userName === null || typeof userName === "undefined"){
            this.userNameFlag = true;
            setTimeout(function() {
                this.userNameFlag = false;
            }.bind(this), 5000);
        } else  if(password === "" || password === null || typeof password === "undefined"){
            this.passwordFlag = true;
            setTimeout(function() {
                this.passwordFlag = false;
            }.bind(this), 5000);
        }else{
            let payload = { "name": 'admin', "password": "password" };
            let payload1 = { "name": userName, "password": "password" };
            let loginWarningFlag;
             this._userService.verifyUser(payload1).subscribe(resp => {
                loginWarningFlag = resp.json().warningFl ;
              if(loginWarningFlag == false){
                this._loginService.getAuthenticationToken(payload).subscribe(resp => {
                    this.jwtToken = this._loginService.getJwtToken();
                    if(this.jwtToken === "" || this.jwtToken === null || typeof this.jwtToken === "undefined") {
                        alert(this.jwtToken);
                        this.authFlag = true;
                        setTimeout(function() {
                            this.authFlag = false;
                        }.bind(this), 5000); 
                    }else{
                        this.router.navigate(['/dashboard/default']);
                    }
                }, err => {
                    alert("Error occured");
                    alert(err);      
                });
              }else{
                this.passwordMacthFlag = true;
                setTimeout(function() {
                    this.passwordMacthFlag = false;
                }.bind(this), 5000);
              }
            },
            err => {
                alert("Error occured");
                alert(err);  
            });
    }
    }
}
