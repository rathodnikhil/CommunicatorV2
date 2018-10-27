import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';

@NgModule({
  imports: [
    CommonModule,
    ServerErrorRoutingModule
  ],
  declarations: [ServerErrorComponent, ShareScreenComponent]
})
export class ServerErrorModule { }
