import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor() {}
    isClosed = false;
    ngOnInit() {
        this.hamburger_cross();
    }
    hamburger_cross = function() {
        this.isClosed = !this.isClosed;
            // if (this.isClosed === true) {
            // //   overlay.hide();
            //   trigger.removeClass('is-open');
            //   trigger.addClass('is-closed');
            //   isClosed = false;
            // } else {
            //   overlay.show();
            //   trigger.removeClass('is-closed');
            //   trigger.addClass('is-open');
            //   isClosed = true;
            // }
        };
}



