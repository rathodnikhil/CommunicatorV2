import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageGroupComponent } from './manage-group/manage-group.component';
import { ManageGroupRoutingModule } from './manage-group.routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule, ManageGroupRoutingModule, NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [ManageGroupComponent]
})
export class ManageGroupModule { }
