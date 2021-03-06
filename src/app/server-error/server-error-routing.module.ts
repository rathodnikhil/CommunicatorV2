import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerErrorComponent } from './server-error.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { RecordScreenComponent } from './record-screen/record-screen.component';
import { RecordScreenStepsComponent } from './record-screen-steps/record-screen-steps.component';
import { PluginInstallationComponent } from './plugin-installation/plugin-installation/plugin-installation.component';

const routes: Routes = [
    {
        path: '', component: ServerErrorComponent
    },
    {
        path: 'sharescreen', component: ShareScreenComponent
    },
    {
        path: 'recordscreen', component: RecordScreenComponent
    },
    {
        path: 'recordscreensteps', component: RecordScreenStepsComponent
    } ,
    {
        path: 'plugininstallation', component: PluginInstallationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServerErrorRoutingModule {
}
