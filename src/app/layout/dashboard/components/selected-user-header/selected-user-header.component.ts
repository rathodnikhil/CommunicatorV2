import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CustomModalModel, CustomModalComponent } from '../custom-modal/custom-modal.component';
@Component({
    selector: 'app-selected-user-header',
    templateUrl: './selected-user-header.component.html',
    styleUrls: ['./selected-user-header.component.scss']
})
export class SelectedUserHeaderComponent implements OnInit {
    @Input() SelectedUser: any;
    @ViewChild('viewProfileModal') public viewProfileModal: CustomModalComponent;
    viewProfile: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'Profile Details',
        smallHeading: 'User profile details',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Profile',
        Button2Content: ''
    };
    constructor() { }

    ngOnInit() {
    }
    open() {
        this.viewProfileModal.open();
    }
    closePopup() {
        this.viewProfileModal.close();
    }
}
