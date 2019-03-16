import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastMeetingsComponent } from './past-meetings/past-meetings.component';
import { PastMeetingsRoutingModule } from './past-meetings-routing.module';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomModalComponent } from '../dashboard/components/custom-modal/custom-modal.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule, PastMeetingsRoutingModule, SharedPipesModule, FormsModule, NgxPaginationModule,DashboardModule
  ],
  declarations: [PastMeetingsComponent]
})
export class PastMettingsModule { }
