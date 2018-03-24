import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingVideoCallComponent } from './meeting-video-call.component';

describe('MeetingVideoCallComponent', () => {
  let component: MeetingVideoCallComponent;
  let fixture: ComponentFixture<MeetingVideoCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingVideoCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingVideoCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
