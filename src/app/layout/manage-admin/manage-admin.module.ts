import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ManageAdminRoutingModule } from './manage-admin-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from '../../shared';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';
@NgModule({
    imports: [
        CommonModule, ManageAdminRoutingModule, FormsModule, NgxPaginationModule, SharedPipesModule, DashboardModule, CommonComponentsModule
    ],
    declarations: [ManageAdminComponent]
})
export class ManageAdminModule { }
