import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';
@NgModule({
  imports: [
    CommonModule, CommonComponentsModule, ResetPasswordRoutingModule, FormsModule, ToastrModule.forRoot()
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
