import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericSearchAllPropPipe } from './generic-search-all-prop.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [GenericSearchAllPropPipe],
    exports: [GenericSearchAllPropPipe]
})
export class SharedPipesModule { }
