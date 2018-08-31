import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRightsComponent } from './user-rights/user-rights.component';
import { UserRightsRoutingModule } from './user-rights-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, UserRightsRoutingModule , FormsModule
  ],
  declarations: [UserRightsComponent]
})
export class UserRightsModule { }
