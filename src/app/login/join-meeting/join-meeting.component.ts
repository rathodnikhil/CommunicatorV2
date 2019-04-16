import { Component, OnInit , ElementRef , Inject} from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from 'app/services/alert.service';
import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-join-meeting',
  templateUrl: './join-meeting.component.html',
  styleUrls: ['./join-meeting.component.scss'],
  providers: [AlertService]
})
export class JoinMeetingComponent implements OnInit {
  userName: any;
  isGuest: boolean;
  previousUrl: string;
  meetingCode: string;
  _userService: UserService;
  readOnlyFlag = false;
  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef, public router: Router, userService: UserService,
   private activatedRoute: ActivatedRoute, public alertService: AlertService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.isGuest = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.meetingCode = params['meetingCode'];
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    (<any>window).customAlertService = this.alertService;
    const s = this.document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/scripts/checkPlugins.js';
    s.id = 'meetingTest';
    const __this = this; // to store the current instance to call
    // afterScriptAdded function on onload event of
    // script.
    s.onload = function () { __this.afterScriptAdded(); };
    this.elementRef.nativeElement.appendChild(s);
}

afterScriptAdded() {
    // this.document.getElementById('room-id').value = this.meetingCode === undefined ? 'Enter Meeting Id' : this.meetingCode;
    const params = {
        width: '350px',
        height: '420px',
    };
    if (typeof (window['functionFromExternalScript']) === 'function') {
        window['functionFromExternalScript'](params);
    }
}
  guestLogin() {
    if (this.document.getElementById('isRecordScreenPopupClosed').innerText === 'true'
    || this.document.getElementById('isScreenSharePopupClosed').innerText === 'true') {
    return this.alertService.error('Close the popup to continue', 'Error');
}
    if (this.meetingCode === null || typeof this.meetingCode === 'undefined' || this.meetingCode.trim() === '') {
      return this.alertService.error('Enter meeting code', 'Error');
    }
    if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '') {
      return this.alertService.error('Enter full name', 'Error');
    }
    localStorage.setItem('loggedInuserName', this.userName);
    const currentDate = new Date();
    const guestUserCode = 'guest' + (+currentDate);
    const senderNameArray = this.setAttendeeName(this.userName);
    let firstNameUpperCase = null;
    if (senderNameArray.length < 3) {
      firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1);
    } else {
      firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1) + ' '
        + senderNameArray[2].charAt(0).toUpperCase() + senderNameArray[2].slice(1);
    }
    const payload = {
      firstName: firstNameUpperCase,
      isGuest: this.isGuest, userCode: guestUserCode, email: guestUserCode + '@guest.com', meetingCode: this.meetingCode
    };
    this._userService.setLoggedInUserObj(payload).subscribe(res => {
      if (res === 'invalid') {
        this.alertService.warning('Please enter valid Meeting Id', 'Invalid Data');
        return false;
      } else {
        if (res.firstName !== undefined) {
          if (!this.previousUrl) {
            // this.router.navigate(['meeting' + this.meetingCode]);
            this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
          } else {
            if (this.previousUrl.indexOf('meeting') > 0) {
              this.router.navigateByUrl(this.previousUrl);
            } else {
              this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
            }
          }
        }
      }
    });
  }
  onKey(event) {
    if (event.key === 'Enter') { this.guestLogin(); }
  }
  setAttendeeName(attendeeFullName) {
    attendeeFullName = attendeeFullName.split(' ');
    const attendeeFullNameArray = new Array();
    for (let i = 0; i < attendeeFullName.length; i++) {
      attendeeFullNameArray.push(attendeeFullName[i]);
      if (i !== attendeeFullName.length - 1) {
        attendeeFullNameArray.push(' ');
      }
    }
    return attendeeFullNameArray;
  }

}
