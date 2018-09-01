import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { AudioMeetingComponent } from './audio-meeting/audio-meeting.component';


const routes: Routes = [
    {
        path: '',
        component: MeetingComponent
    },
    {
        path: 'audio',
        component: AudioMeetingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeetingRoutingModule {}
