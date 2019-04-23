import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';
@NgModule({
  imports: [
    CommonModule, UserSettingsRoutingModule , FormsModule, CommonComponentsModule
  ],
  declarations: [UserSettingsComponent]
})
export class UserSettingsModule { }
