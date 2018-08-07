import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';


const routes: Routes = [
    {
        path: '',
        component: ManageAdminComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageAdminRoutingModule {}
