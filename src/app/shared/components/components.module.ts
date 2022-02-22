import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FigureComponent } from './figure/figure.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    FigureComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FigureComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
