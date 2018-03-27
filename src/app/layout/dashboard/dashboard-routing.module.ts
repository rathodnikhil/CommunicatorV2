import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DefaultChatComponent } from './components/default-chat/default-chat.component';
import { ScheduleMeetingComponent } from 'app/layout/dashboard/components/schedule-meeting/schedule-meeting.component';
import { MeetingVideoCallComponent } from 'app/layout/dashboard/components/meeting-video-call/meeting-video-call.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'default' },
            { path: 'default', component: DefaultChatComponent },
            { path: 'chat', component: TimelineComponent},
            { path: 'videoMeeting', component: MeetingVideoCallComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
