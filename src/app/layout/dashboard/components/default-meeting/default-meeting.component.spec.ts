import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMeetingComponent } from './default-meeting.component';

describe('DefaultMeetingComponent', () => {
  let component: DefaultMeetingComponent;
  let fixture: ComponentFixture<DefaultMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
