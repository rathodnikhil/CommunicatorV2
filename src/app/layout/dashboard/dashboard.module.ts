import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule, SharedPipesModule } from '../../shared';
import { DefaultChatComponent } from './components/default-chat/default-chat.component';
import { DefaultMeetingComponent } from './components/default-meeting/default-meeting.component';
import { ScheduleMeetingComponent } from './components/schedule-meeting/schedule-meeting.component';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { MeetingVideoCallComponent } from './components/meeting-video-call/meeting-video-call.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { SearchMemberPipe } from './components/notification/search-member.pipe';
import { BroadcastMessageComponent } from './broadcast-message/broadcast-message.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SearchFutureMeetingPipe } from './components/default-meeting/search-future-meeting.pipe';
import { VideoCallComponent } from './components/video-call/video-call.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        BsComponentModule,
        NgbModule.forRoot(),
        SharedPipesModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        DefaultChatComponent,
        DefaultMeetingComponent,
        ScheduleMeetingComponent,
        MeetingVideoCallComponent,
        CustomModalComponent,
        SearchMemberPipe,
        BroadcastMessageComponent,
        CreateGroupComponent,
        SearchFutureMeetingPipe,
        VideoCallComponent
    ],
    exports: [CustomModalComponent]
})
export class DashboardModule {}
