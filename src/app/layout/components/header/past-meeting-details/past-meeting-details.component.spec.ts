import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMeetingDetailsComponent } from './past-meeting-details.component';

describe('PastMeetingDetailsComponent', () => {
  let component: PastMeetingDetailsComponent;
  let fixture: ComponentFixture<PastMeetingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastMeetingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
