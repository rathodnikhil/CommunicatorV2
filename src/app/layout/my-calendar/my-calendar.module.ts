import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { MyCalendarRoutingModule } from './my-calendar-routing.module';
import { FullCalendarModule } from 'ng-fullcalendar';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';
@NgModule({
  imports: [
    CommonModule, MyCalendarRoutingModule, FullCalendarModule, DashboardModule, CommonComponentsModule
  ],
  declarations: [MyCalendarComponent]
})
export class MyCalendarModule { }
