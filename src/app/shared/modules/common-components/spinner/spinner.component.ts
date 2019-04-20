import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isSpinnerVisible = true;
  constructor() { }

  ngOnInit() {
  }

  showSpinner() {
    this.isSpinnerVisible = true;
  }
  hideSpinner() {
    this.isSpinnerVisible = false;
  }
}
