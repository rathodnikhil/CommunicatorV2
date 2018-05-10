import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastMeetingsComponent } from './past-meetings/past-meetings.component';

const routes: Routes = [
    {
        path: '',
        component: PastMeetingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PastMeetingsRoutingModule {}
