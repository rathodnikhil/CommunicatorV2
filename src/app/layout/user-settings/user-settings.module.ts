import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, UserSettingsRoutingModule , FormsModule
  ],
  declarations: [UserSettingsComponent]
})
export class UserSettingsModule { }
