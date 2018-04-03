import { Component, OnInit, EventEmitter, Output, ViewChild , ViewContainerRef} from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @ViewChild('inviteAttendeesModal') public inviteAttendeesModal: CustomModalComponent;
    InviteAttendees: CustomModalModel = {
        title: 'Profile Details',
        smallHeading: 'You can change your profile details here',
        body: '<div class="row"><div class="col-md-4"><label>Display Name</label></div><div> <input type="password" id="inputPassword"'
            + '/></div></div><div class="row"><div class="col-md-4">'
            + 'Display Picture</div>'
             + '<div class="col-md-3">'
            + '<i class="fa fa-user" style="font-size:200px;"></i></div>'
            + '<div class="col-md-5"><a style="text-decoration : underline">Change Picture</a><br><a>Remove Picture</a></div>'
            + '<hr></div>',
        Button1Content: '<i class="fa fa-user"></i>Update Profile',
        Button2Content: ''
    };
  constructor() { }

  ngOnInit() {
  }
  open() {
      this.inviteAttendeesModal.open();
  }
}
