import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
    closeResult: string;
    @ViewChild('content') public content2: NgbActiveModal;
    @Input() model: CustomModalModel;
    @Output() Button1Event = new EventEmitter();
    @Output() Button2Event = new EventEmitter();
    @Output() CancelEvent = new EventEmitter();
    constructor(private modalService: NgbModal) { }

    open() {
        // debugger;
        this.modalService.open(this.content2).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            this.CancelEvent.emit(reason);
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    button1Click(e) {
        this.Button1Event.emit(e);
    }
    button2Click(e) {
        this.Button2Event.emit(e);
    }
}
export class CustomModalModel {
    title: string;
    titleIcon: string;
    smallHeading: string;
    body: string;
    Button1Content: string;
    Button2Content: string;
}
