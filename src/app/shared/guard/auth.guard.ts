import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from '../../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: UserService, private _loginService: LoginService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        //  // debugger;
        return this.authService.getLoggedInUserObj().map((auth) => {
            // // debugger;
            // this._loginService.setPreviousUrl(state.url);
            if (!(auth.firstName === undefined)) {
                console.log('authenticated');
                // this.router.navigateByUrl(state.url);
                return true;
            }
            console.log('not authenticated');
            this.router.navigateByUrl('/login');
            return false;
        }).first(); // this might not be necessary - ensure `first` is imported if you use it
    }
}
