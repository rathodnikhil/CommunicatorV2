import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';

@NgModule({
  imports: [
    CommonModule, MyProfileRoutingModule
  ],
  declarations: [MyProfileComponent]
})
export class MyProfileModule { }
