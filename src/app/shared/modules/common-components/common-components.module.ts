import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent, FooterComponent],
  exports: [SpinnerComponent, FooterComponent]
})
export class CommonComponentsModule { }
