import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsComponentComponent } from './bs-component.component';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from 'app/layout/bs-component/components';
import { DropdownComponent } from './components/dropdown/dropdown.component';

const routes: Routes = [
    {
        path: '',
        component: BsComponentComponent,
        children: [
            { path: '', redirectTo: 'dp' },
            { path: 'default', component: ModalComponent },
            { path: 'chat', component: AlertComponent},
            { path: 'dp', component: DropdownComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BsComponentRoutingModule {}
