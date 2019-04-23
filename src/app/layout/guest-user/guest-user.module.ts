import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestUserComponent } from './guest-user/guest-user.component';
import { GuestUserRoutingModule } from './guest-user.routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from '../../shared';
import { CommonComponentsModule } from 'app/shared/modules/common-components/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    GuestUserRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    SharedPipesModule,
    CommonComponentsModule
  ],
  declarations: [GuestUserComponent]
})
export class GuestUserModule { }
