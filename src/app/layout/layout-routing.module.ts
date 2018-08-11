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
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'ManageTeam', loadChildren: './manage-team/manage-team.module#ManageTeamModule' },
            { path: 'userSettings', loadChildren: './user-settings/user-settings.module#UserSettingsModule' },
            { path: 'pastMeetings', loadChildren: './past-mettings/past-mettings.module#PastMettingsModule' },
            { path: 'myProfile', loadChildren: './my-profile/my-profile.module#MyProfileModule' },
            { path: 'changeRights', loadChildren: './user-rights/user-rights.module#UserRightsModule' },
            { path: 'myCalendar', loadChildren: './my-calendar/my-calendar.module#MyCalendarModule' },
            { path: 'meeting', loadChildren: './meeting/meeting.module#MeetingModule'},
            { path: 'ManageAdmin', loadChildren: './manage-admin/manage-admin.module#ManageAdminModule'},
            { path: 'ResetPassword', loadChildren: './reset-password/reset-password.module#ResetPasswordModule'}
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
