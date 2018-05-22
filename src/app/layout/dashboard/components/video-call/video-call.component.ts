import { Component, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent implements OnInit, AfterViewInit {
    loggedInUser: any;
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }
    ngAfterViewInit(): void {
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';

        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingTest.js';
        const __this = this; // to store the current instance to call
                             // afterScriptAdded function on onload event of
                             // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }


    ngOnInit() {
        this.loggedInUser = {name: 'NIkitesh', lastName: 'Kolpe'};
    }
    afterScriptAdded() {
        // debugger;
        const meetingName = this.document.getElementById('meeting-name');
        meetingName.value = 'Nikitesh Kolpe- Vrushali';
        this.document.getElementById('setup-meeting').click();
        const params = {
          width: '350px',
          height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
          window['functionFromExternalScript'](params);
        }
      }

}
