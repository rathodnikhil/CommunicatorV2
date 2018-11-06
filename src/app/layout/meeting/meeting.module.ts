import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingRoutingModule } from './meeting-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { AudioMeetingComponent } from './audio-meeting/audio-meeting.component';
import { CustomModalComponent } from '../dashboard/components/custom-modal/custom-modal.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HorizontalScrollingComponent } from './horizontal-scrolling/horizontal-scrolling.component';
import { CountdownModule } from 'ngx-countdown';
import { DragScrollModule } from 'ngx-drag-scroll';
@NgModule({
    imports: [
        CommonModule, MeetingRoutingModule,
        FormsModule,
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule,
        BsComponentModule,
        NgbModule.forRoot(),
        DashboardModule,
        FormsModule,
        CountdownModule,
        DragScrollModule
    ],

    declarations: [MeetingComponent, AudioMeetingComponent, HorizontalScrollingComponent]
})
export class MeetingModule { }
