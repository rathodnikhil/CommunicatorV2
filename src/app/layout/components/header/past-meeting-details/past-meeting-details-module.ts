import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PastMeetingDetailsRoutingModule} from './past-meeting-details-routing-module';
import { PastMeetingDetailsComponent } from './past-meeting-details.component';

@NgModule({
    imports: [CommonModule, PastMeetingDetailsModule],
    declarations: [PastMeetingDetailsComponent]
})
export class PastMeetingDetailsModule {}
