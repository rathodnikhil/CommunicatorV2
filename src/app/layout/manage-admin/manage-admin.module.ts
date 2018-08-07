import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ManageAdminRoutingModule } from './manage-admin-routing.module';

@NgModule({
    imports: [
        CommonModule, ManageAdminRoutingModule
    ],
    declarations: [ManageAdminComponent]
})
export class ManageAdminModule { }
