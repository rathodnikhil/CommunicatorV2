import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastMeetingsComponent } from './past-meetings/past-meetings.component';
import { PastMeetingsRoutingModule } from './past-meetings-routing.module';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule, PastMeetingsRoutingModule, SharedPipesModule, FormsModule, NgxPaginationModule
  ],
  declarations: [PastMeetingsComponent]
})
export class PastMettingsModule { }
