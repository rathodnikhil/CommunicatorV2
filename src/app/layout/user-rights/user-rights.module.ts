import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRightsComponent } from './user-rights/user-rights.component';
import { UserRightsRoutingModule } from './user-rights-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule, UserRightsRoutingModule , FormsModule ,SharedPipesModule, FormsModule, NgxPaginationModule
  ],
  declarations: [UserRightsComponent]
})
export class UserRightsModule { }
