import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { DefaultChatComponent } from './components/default-chat/default-chat.component';
import { DefaultMeetingComponent } from './components/default-meeting/default-meeting.component';
import { ScheduleMeetingComponent } from './components/schedule-meeting/schedule-meeting.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        DefaultChatComponent,
        DefaultMeetingComponent,
        ScheduleMeetingComponent
    ]
})
export class DashboardModule {}
