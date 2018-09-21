import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterAdminRoutingModule } from './register-admin-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,RegisterAdminRoutingModule,FormsModule
  ],
  declarations: [RegisterAdminComponent]
})
export class RegisterAdminModule { }
