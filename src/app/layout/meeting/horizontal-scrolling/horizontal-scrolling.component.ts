import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-scrolling',
  templateUrl: './horizontal-scrolling.component.html',
  styleUrls: ['./horizontal-scrolling.component.scss']
})
export class HorizontalScrollingComponent implements OnInit {

  @ViewChild('content') private content: ElementRef;
  @Output() onScrollToEnd: EventEmitter<any> = new EventEmitter();
  canScrollRight: boolean;
  canScrollLeft: boolean;
  intervalId: any;

  constructor() { }

  ngOnInit() {
      this.intervalId = 0;
    this.canScrollRight = true;
    if (this.content.nativeElement.scrollLeft <= 0) {
      this.canScrollLeft = false;
    }
  }

  onScroll(value) {
    if (!this.intervalId &&
      this.content.nativeElement.clientWidth + this.content.nativeElement.scrollLeft
      <= this.content.nativeElement.scrollWidth) {
      this.intervalId = setInterval(() => this.horizontalScroll(value), 50);
      if (!this.canScrollLeft) {
        this.canScrollLeft = true;
      }
    }
  }

  onScrollStop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }

  horizontalScroll(value) {
    this.content.nativeElement.scrollLeft += value;
    this.canScrollRight = this.content.nativeElement.clientWidth + this.content.nativeElement.scrollLeft <
      this.content.nativeElement.scrollWidth;
    this.canScrollLeft = this.content.nativeElement.scrollLeft > 0;
    if (value > 0 && !this.canScrollRight) {
      this.canScrollRight = false;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = 0;
      }
      this.onScrollToEnd.emit();
    } else if (value < 0 && !this.canScrollLeft) {
      this.canScrollLeft = false;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = 0;
      }
    }
  }
}
