import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageGroupComponent } from './manage-group/manage-group.component';


const routes: Routes = [
    {
        path: '',
        component: ManageGroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageGroupRoutingModule {}
