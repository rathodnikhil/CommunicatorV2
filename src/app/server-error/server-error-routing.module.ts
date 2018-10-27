import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerErrorComponent } from './server-error.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';

const routes: Routes = [
    {
        path: '', component: ServerErrorComponent
    },
    {
        path: 'sharescreen', component: ShareScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServerErrorRoutingModule {
}
