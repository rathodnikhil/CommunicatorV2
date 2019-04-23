import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { ManageTeamRoutingModule } from './manage-team-routing.module';
 import { CustomModalComponent } from '../dashboard/components/custom-modal/custom-modal.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { SharedPipesModule } from '../../shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';
@NgModule({
  imports: [
    CommonModule, ManageTeamRoutingModule, DashboardModule, FormsModule , SharedPipesModule, NgxPaginationModule, CommonComponentsModule
  ],
  declarations: [ManageTeamComponent]
})
export class ManageTeamModule { }
