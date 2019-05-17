import { Component, OnInit, ElementRef, Inject , ViewChild } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from 'app/services/alert.service';
import { DOCUMENT } from '@angular/common';
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
  isMeetingCodeInValid = false;
  @ViewChild('usernameField') usernameField: ElementRef;
  @ViewChild('meetingCodeField') meetingCodeField: ElementRef;
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
    const NAME_REGEXP = /^[a-zA-Z]+$/i;
    if (this.document.getElementById('isRecordScreenPopupClosed').innerText === 'true'
      || this.document.getElementById('isScreenSharePopupClosed').innerText === 'true') {
      return this.alertService.error('Please close popup to continue', 'Error');
    } else if (this.meetingCode === null || typeof this.meetingCode === 'undefined' || this.meetingCode.trim() === '') {
      return this.validationMsgAndField(this.meetingCodeField , 'Please enter Meeting Id', 'Warning');
    } else if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '') {
      return this.validationMsgAndField(this.usernameField , 'Enter Full Name', 'Warning');
    } else if (!NAME_REGEXP.test(this.userName)) {
      return this.validationMsgAndField(this.usernameField , 'Please enter alphabates only ', 'Warning');
    }
    const payload = this.setDefaultGuestValuesAndCreatePayload();
    this.getLoggedInUserApiCall(payload);
  }
  private validationMsgAndField(elementFocus: ElementRef , validationMsg: String , flag: String) {
    elementFocus.nativeElement.focus();
    return this.alertService.warning(validationMsg , flag);
}
  private getLoggedInUserApiCall(payload: { firstName: any; isGuest: boolean; userCode: string; email: string; meetingCode: string; }) {
    this._userService.setLoggedInUserObj(payload).subscribe(res => {
      if (res === 'invalid' && !this.isMeetingCodeInValid) {
        return this.setMeetingCodeValidation();
      } else {
        this.setLoggedUserSuccessRespAction(res);
      }
    });
  }

  private setMeetingCodeValidation() {
    this.isMeetingCodeInValid = true;
    this.alertService.warning('Please enter valid Meeting Id', 'Invalid Meeting Id');
    return false;
  }

  private setLoggedUserSuccessRespAction(res: any) {
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

  private setDefaultGuestValuesAndCreatePayload() {
    localStorage.setItem('loggedInuserName', this.userName);
    const currentDate = new Date();
    const guestUserCode = 'guest' + (+currentDate);
    const firstNameUpperCase = this.setUpperCase();
    const payload = {
      firstName: firstNameUpperCase,
      isGuest: this.isGuest, userCode: guestUserCode, email: guestUserCode + '@guest.com', meetingCode: this.meetingCode
    };
    return payload;
  }

  private setUpperCase() {
    const senderNameArray = this.setAttendeeName(this.userName);
    let firstNameUpperCase = null;
    if (senderNameArray.length < 3) {
      firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1);
    } else {
      firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1) + ' '
        + senderNameArray[2].charAt(0).toUpperCase() + senderNameArray[2].slice(1);
    }
    return firstNameUpperCase;
  }

  onKey(event) {
    this.isMeetingCodeInValid = false;
    if (event.key === 'Enter') { this.guestLogin(); }
  }
  setAttendeeName(attendeeFullName) {
    attendeeFullName = attendeeFullName.split(' ');
    const attendeeFullNameArray = new Array();
    this.iterateAttendeeFullNameArray(attendeeFullName, attendeeFullNameArray);
    return attendeeFullNameArray;
  }


  private iterateAttendeeFullNameArray(attendeeFullName: any, attendeeFullNameArray: any[]) {
    for (let i = 0; i < attendeeFullName.length; i++) {
      attendeeFullNameArray.push(attendeeFullName[i]);
      if (i !== attendeeFullName.length - 1) {
        attendeeFullNameArray.push(' ');
      }
    }
  }
}
