import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterAdminRoutingModule } from './register-admin-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';

@NgModule({
  imports: [
    CommonModule, RegisterAdminRoutingModule, FormsModule, CommonComponentsModule
  ],
  declarations: [RegisterAdminComponent]
})
export class RegisterAdminModule { }
