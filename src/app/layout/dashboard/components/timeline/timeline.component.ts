import { Component, OnInit, EventEmitter, Output, ViewChild , ViewContainerRef} from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @ViewChild('inviteAttendeesModal') public inviteAttendeesModal: CustomModalComponent;
    InviteAttendees: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'Profile Details',
        smallHeading: 'You can change your profile details here',
        body: '<div class="row"><div class="col-md-4"><label>Display Name</label></div><div class="col-md-5"> Chetan Patwardhan</div>'
           +  '<div class="col-md-3"><a>Change</a></div></div><div class="row"><div class="col-md-4">'
            + 'Display Picture</div>'
             + '<div class="col-md-3">'
            + '<i class="fa fa-user" style="font-size:200px;"></i></div>'
            + '<div class="col-md-5"><a style="text-decoration : underline">Change Picture</a><br><a>Remove Picture</a></div>'
            + '<hr></div>',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Profile',
        Button2Content: ''
    };

    loggedInUser: any;
    _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
   }

  ngOnInit() {
    this.loggedInUser ={
        'id': 2,
        'email': 'b@gmail.com',
        'password': '1235',
        'name': 'sunita',
        'lastName': 'kolhapure',
        'active': 1,
        'teamId': {
            'prime': null,
            'errorFl': false,
            'warningFl': false,
            'message': null,
            'teamId': 1,
            'teamName': 'cfs_pune',
            'status': {
                'statusId': 1,
                'status': 'Active'
            }
        },
        'profileImgPath': null
    };
    const payload = {loggedInUserId: 2};
    this._userService.getLoggedInUSerDetails(payload).subscribe(data => {
        this.loggedInUser = data.json();
    });
  }
  open(loggedInUser) {
      alert(loggedInUser.name + loggedInUser.lastName);
      this.inviteAttendeesModal.open();
  }
  updateProfile(event) {
    alert('copy text');
  }
}
