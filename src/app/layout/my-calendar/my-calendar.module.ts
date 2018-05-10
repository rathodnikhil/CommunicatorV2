import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { MyCalendarRoutingModule } from './my-calendar-routing.module';

@NgModule({
  imports: [
    CommonModule, MyCalendarRoutingModule
  ],
  declarations: [MyCalendarComponent]
})
export class MyCalendarModule { }
