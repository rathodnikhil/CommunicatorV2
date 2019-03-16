import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'ManageTeam', loadChildren: './manage-team/manage-team.module#ManageTeamModule' },
            { path: 'userSettings', loadChildren: './user-settings/user-settings.module#UserSettingsModule' },
            { path: 'pastMeetings', loadChildren: './past-mettings/past-mettings.module#PastMettingsModule' },
            { path: 'myProfile', loadChildren: './my-profile/my-profile.module#MyProfileModule' },
            { path: 'myCalendar', loadChildren: './my-calendar/my-calendar.module#MyCalendarModule' },
            { path: 'meeting', loadChildren: './meeting/meeting.module#MeetingModule'},
            { path: 'ManageAdmin', loadChildren: './manage-admin/manage-admin.module#ManageAdminModule'},
            { path: 'ManageGroup', loadChildren: './manage-group/manage-group.module#ManageGroupModule'},
             { path: 'GuestUser', loadChildren: './guest-user/guest-user.module#GuestUserModule'},
             { path: 'RegisterAdmin', loadChildren: './register-admin/register-admin.module#RegisterAdminModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
