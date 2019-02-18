import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from 'app/services/alert.service';

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
  constructor(public router: Router, userService: UserService, private activatedRoute: ActivatedRoute, public alertService: AlertService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.isGuest = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.meetingCode = params['meetingCode'];
    });
  }
  guestLogin() {
    if (this.meetingCode == null || this.meetingCode === '') {
      return this.alertService.error('Enter meeting code', 'Error');
    }
    if (this.userName === undefined || this.userName
      === '' || this.userName === null) {
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
