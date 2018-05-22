import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingRoutingModule } from './meeting-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { BsComponentModule } from '../bs-component/bs-component.module';

@NgModule({
    imports: [
        CommonModule, MeetingRoutingModule,
        FormsModule,
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule,
        BsComponentModule,
        NgbModule.forRoot()
    ],
    declarations: [MeetingComponent]
})
export class MeetingModule { }