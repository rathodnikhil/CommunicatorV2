import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUserHeaderComponent } from './selected-user-header.component';

describe('SelectedUserHeaderComponent', () => {
  let component: SelectedUserHeaderComponent;
  let fixture: ComponentFixture<SelectedUserHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedUserHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
