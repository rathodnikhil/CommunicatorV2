import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordScreenStepsComponent } from './record-screen-steps.component';

describe('RecordScreenStepsComponent', () => {
  let component: RecordScreenStepsComponent;
  let fixture: ComponentFixture<RecordScreenStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordScreenStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordScreenStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
