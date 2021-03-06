import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../services/user.service';
import { GroupService } from '../../../services/group.service';
import { LoginService } from '../../../services/login.service';
import { AlertService } from '../../../services/alert.service';
import { ErrorMessageConstants, TypeOfError } from 'app/shared/errorMessageConstants';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [GroupService , AlertService]
})
export class HeaderComponent implements OnInit {
    _userService: UserService;
    _groupService: GroupService;
    pushRightClass = 'push-right';
    isClosed = true;
    loggedInUserObj: any;
    sidebarMenuList = [];
    guestFlag: boolean;
    constructor(private translate: TranslateService, public router: Router,
        userService: UserService, groupService: GroupService, public alertService: AlertService) {
        this._userService = userService;
        this._groupService = groupService;
        this.setBrowserActivities();
        this.routerAction();
    }

    private setBrowserActivities() {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    private routerAction() {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.sidebarMenuList = [];
        this.guestFlag = false;
        this.loggedInUserObjApiCall();
    }

    private loggedInUserObjApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined && !data.isGuest) {
                this.setLoggedInUserSuccessAction(data);
            }  else {
                this.sidebarMenuList = [];
                this.guestFlag = true;
            }
        });
    }

    private setLoggedInUserSuccessAction(data: any) {
        this.loggedInUserObj = data;
        this._userService.setSideBarMenuByLoggedInUSer();
        this.getSiderMenuListApiCall();
    }

    private getSiderMenuListApiCall() {
        this._userService.getSideBarMenuByLoggedInUSer().subscribe(sideMenuData => {
            if (sideMenuData.length > 0) {
                this.sidebarMenuList = sideMenuData;
            }
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    hamburger_cross() {
        this.isClosed = !this.isClosed;
    }
    logout() {
        const payload = { userCode: this.loggedInUserObj.userCode };
        this._userService.logoutApplication(payload).subscribe(data => {
            if (data.errorFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                this.router.navigate(['/login']);
                window.location.reload();
            }
        });

    }
}
