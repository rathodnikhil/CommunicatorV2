import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { ManageTeamRoutingModule } from './manage-team-routing.module';

@NgModule({
  imports: [
    CommonModule, ManageTeamRoutingModule
  ],
  declarations: [ManageTeamComponent]
})
export class ManageTeamModule { }
