import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';


@NgModule({
  imports: [
    CommonModule, ResetPasswordRoutingModule
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
