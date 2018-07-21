import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
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
    previousUrl: string;
    passwordMacthFlag: boolean;
    isGuest: boolean;
    Logintext = "Login";
    constructor(public router: Router, loginService: LoginService, userService: UserService) {
        this._loginService = loginService;
        this._userService = userService;
    }

    ngOnInit() {
        //  this.onLoggedin();
        // debugger;
        this.previousUrl = this._loginService.getPreviousUrl();
        this.isGuest = false;
    }

    // async onLoggedin() {
    //     const userid = '123';
    //     const abc = await this._loginService
    //         .authUser(userid)
    //         .subscribe(
    //             data =>
    //                 (this.user = {
    //                     username: data['username']
    //                 })
    //         );

    //     //localStorage.setItem('isLoggedin', 'true');
    // }
    ngOnDestroy(): void {
        //  this._loginService.dest        
    }
    guestLogin() {
        // debugger;
        this.Logintext = this.isGuest ? "Continue" : "Login";
    }
    login() {
        if (this.userName === "" || this.userName === null) {
            this.userNameFlag = true;
            setTimeout(function () {
                this.userNameFlag = false;
            }.bind(this), 5000);
        } else if (!this.isGuest && (this.password === "" || this.password === null)) {
            this.passwordFlag = true;
            setTimeout(function () {
                this.passwordFlag = false;
            }.bind(this), 5000);
        } else {
            if (this.isGuest) {
                localStorage.setItem('loggedInuserName', this.userName);
                debugger;
                if (this.previousUrl)
                    this.router.navigateByUrl(this.previousUrl);
                else
                    this.router.navigate(['/meeting']);
            } else {
                let payload = { "name": 'admin', "password": "password" };
                let payload1 = { "name": this.userName, "password": this.password };
                let loginWarningFlag;
                localStorage.setItem('loggedInuserName', payload.name);

                // this.router.navigateByUrl(this.previousUrl);
                this._userService.verifyUser(payload1).subscribe(resp => {
                    loginWarningFlag = resp.json().warningFl;
                    if (loginWarningFlag == false) {
                        this._loginService.getAuthenticationToken(payload).subscribe(resp => {
                            this.jwtToken = this._loginService.getJwtToken();
                            if (this.jwtToken === "" || this.jwtToken === null || typeof this.jwtToken === "undefined") {
                                this.authFlag = true;
                                setTimeout(function () {
                                    this.authFlag = false;
                                }.bind(this), 5000);
                            } else {
                                if (this.previousUrl)
                                    this.router.navigate(['/dashboard/default']);
                                else {
                                    this.router.navigateByUrl(this.previousUrl);
                                }
                            }
                        }, err => {
                            alert(err);
                        });
                    } else {
                        this.passwordMacthFlag = true;
                        setTimeout(function () {
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
}
