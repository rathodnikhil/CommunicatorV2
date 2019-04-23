import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';

@NgModule({
  imports: [
    CommonModule, MyProfileRoutingModule , FormsModule, CommonComponentsModule
  ],
  declarations: [MyProfileComponent]
})
export class MyProfileModule { }
