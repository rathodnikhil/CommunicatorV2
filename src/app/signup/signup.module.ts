import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../layout/bs-component/bs-component.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    BsComponentModule,
    NgbModule.forRoot()
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
