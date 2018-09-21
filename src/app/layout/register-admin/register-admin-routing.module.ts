import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAdminComponent } from './register-admin/register-admin.component';


const routes: Routes = [
    {
        path: '',
        component: RegisterAdminComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterAdminRoutingModule {}