import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { RecordScreenComponent } from './record-screen/record-screen.component';

@NgModule({
  imports: [
    CommonModule,
    ServerErrorRoutingModule
  ],
  declarations: [ServerErrorComponent, ShareScreenComponent, RecordScreenComponent]
})
export class ServerErrorModule { }
