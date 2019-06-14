import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { RecordScreenComponent } from './record-screen/record-screen.component';
import { RecordScreenStepsComponent } from './record-screen-steps/record-screen-steps.component';
import { PluginInstallationComponent } from './plugin-installation/plugin-installation/plugin-installation.component';

@NgModule({
  imports: [
    CommonModule,
    ServerErrorRoutingModule
  ],
  declarations: [ServerErrorComponent, ShareScreenComponent, RecordScreenComponent, RecordScreenStepsComponent ,
     PluginInstallationComponent]
})
export class ServerErrorModule { }
