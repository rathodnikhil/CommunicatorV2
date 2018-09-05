import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestUserComponent} from './guest-user/guest-user.component'; 

const routes: Routes = [
    {
        path: '',
        component: GuestUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestUserRoutingModule {}
