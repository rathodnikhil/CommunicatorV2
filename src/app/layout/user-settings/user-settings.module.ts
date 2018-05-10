import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSettingsRoutingModule } from './user-settings-routing.module';

@NgModule({
  imports: [
    CommonModule, UserSettingsRoutingModule
  ],
  declarations: [UserSettingsComponent]
})
export class UserSettingsModule { }
