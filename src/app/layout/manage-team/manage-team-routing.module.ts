import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTeamComponent } from './manage-team/manage-team.component';


const routes: Routes = [
    {
        path: '',
        component: ManageTeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageTeamRoutingModule {}
