import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastMeetingsComponent } from './past-meetings/past-meetings.component';
import { PastMeetingsRoutingModule } from './past-meetings-routing.module';

@NgModule({
  imports: [
    CommonModule, PastMeetingsRoutingModule
  ],
  declarations: [PastMeetingsComponent]
})
export class PastMettingsModule { }
