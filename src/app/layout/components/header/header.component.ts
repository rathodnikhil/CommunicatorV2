import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../services/user.service';
import { GroupService } from '../../../services/group.service';
import { LoginService} from '../../../services/login.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [GroupService]
})
export class HeaderComponent implements OnInit {
    _userService: UserService;
    _groupService: GroupService;
    pushRightClass: string = 'push-right';
    isClosed = true;
    loggedInUserObj: any;
    sidebarMenuList = [];
    constructor(private translate: TranslateService, public router: Router,
         userService: UserService, groupService: GroupService) {

        this._userService = userService;
        this._groupService = groupService;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {

        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
        });
        let payload = { userCode: this.loggedInUserObj.userCode };
        this._groupService.setSideBarMenuByLoggedInUSer(payload);
        this._groupService.getSideBarMenuByLoggedInUSer().subscribe(data => {
            this.sidebarMenuList = data;
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
        alert('logout');
        let payload = { userCode: this.loggedInUserObj.userCode };
        this._userService.logoutApplication(payload).subscribe(data => {
         alert('log out successfully');
        });

    }
}
