import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ResetPasswordRoutingModule,FormsModule
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
