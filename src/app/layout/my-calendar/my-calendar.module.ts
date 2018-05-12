import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { MyCalendarRoutingModule } from './my-calendar-routing.module';
import { FullCalendarModule } from 'ng-fullcalendar';
@NgModule({
  imports: [
    CommonModule, MyCalendarRoutingModule, FullCalendarModule
  ],
  declarations: [MyCalendarComponent]
})
export class MyCalendarModule { }
