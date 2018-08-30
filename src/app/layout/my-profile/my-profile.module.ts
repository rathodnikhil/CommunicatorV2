import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MyProfileRoutingModule ,FormsModule
  ],
  declarations: [MyProfileComponent]
})
export class MyProfileModule { }
