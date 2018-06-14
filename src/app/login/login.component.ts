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
    flag: boolean;
    userNameFlag: boolean;
    passwordFlag: boolean;
    userName: any;
    password: any;
    constructor(public router: Router, loginService: LoginService, userService: UserService) {
        this._loginService = loginService;
        this._userService = userService;
    }

    ngOnInit() {
      //  this.onLoggedin();
    }

    async onLoggedin() {
        // debugger;
        const userid = '123';
      //  debugger;
        const abc = await this._loginService
            .authUser(userid)
            .subscribe(
                data =>
                    (this.user = {
                        username: data['username']
                    })
            );
          
        //      const payload = { id: 2 };
        //  this._userService.setLoggedInUserDetails(payload);
      
        // const payload = { "username": 'admin', "password": 'password' };
        // this._userService.setLoggedInUserDetails(payload);
        //localStorage.setItem('isLoggedin', 'true');
    }
    ngOnDestroy(): void {
        //  this._loginService.dest
    }

      login() {
      
        let payload = { username: 'admin', password: 'password' };
        this._loginService.getAuthenticationToken(payload).subscribe(resp => {
        this.jwtToken = this._loginService.getJwtToken();
        if(this.jwtToken === "" || this.jwtToken === null || typeof this.jwtToken === "undefined") {
            this.flag = true;
        }else{
            this.router.navigate(['/dashboard/default']);
        }
       });

    }
}
