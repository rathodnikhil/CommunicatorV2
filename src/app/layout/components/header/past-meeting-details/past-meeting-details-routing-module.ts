import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastMeetingDetailsComponent } from './past-meeting-details.component';

const routes: Routes = [
    {
        path: '',
        component: PastMeetingDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PastMeetingDetailsRoutingModule {}
