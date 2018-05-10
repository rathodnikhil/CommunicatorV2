import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRightsComponent } from './user-rights/user-rights.component';
import { UserRightsRoutingModule } from './user-rights-routing.module';

@NgModule({
  imports: [
    CommonModule, UserRightsRoutingModule
  ],
  declarations: [UserRightsComponent]
})
export class UserRightsModule { }
