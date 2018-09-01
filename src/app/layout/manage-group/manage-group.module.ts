import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageGroupComponent } from './manage-group/manage-group.component';
import { ManageGroupRoutingModule } from './manage-group.routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule, 
    ManageGroupRoutingModule, 
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    SharedPipesModule
  ],
  declarations: [ManageGroupComponent]
})
export class ManageGroupModule { }