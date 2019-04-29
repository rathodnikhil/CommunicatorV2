import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoinMeetingComponent } from './join-meeting/join-meeting.component';
import { CommonComponentsModule } from '../shared/modules/common-components/common-components.module';
@NgModule({
    imports: [CommonModule, LoginRoutingModule, CommonComponentsModule, FormsModule, ToastrModule.forRoot()],
    declarations: [LoginComponent, JoinMeetingComponent]
})
export class LoginModule { }
