import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ManageAdminRoutingModule } from './manage-admin-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from '../../shared';
@NgModule({
    imports: [
        CommonModule, ManageAdminRoutingModule,FormsModule,NgxPaginationModule,SharedPipesModule
    ],
    declarations: [ManageAdminComponent]
})
export class ManageAdminModule { }
