import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageGroupComponent } from './manage-group/manage-group.component';
import { ManageGroupRoutingModule } from './manage-group.routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from '../../shared';
import { DashboardModule } from '../dashboard/dashboard.module';
@NgModule({
  imports: [
    CommonModule, ManageGroupRoutingModule, DashboardModule, FormsModule , SharedPipesModule, NgxPaginationModule
  ],
  declarations: [ManageGroupComponent]
})
export class ManageGroupModule { }
