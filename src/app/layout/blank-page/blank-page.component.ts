import { Component, OnInit, AfterViewInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit, AfterViewInit {
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }
    ngAfterViewInit(): void {
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';

        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingTest.js';
        const __this = this; //to store the current instance to call
                             //afterScriptAdded function on onload event of
                             //script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }


    ngOnInit() { }
    afterScriptAdded() {
        const params = {
          width: '350px',
          height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
          window['functionFromExternalScript'](params);
        }
      }
}
