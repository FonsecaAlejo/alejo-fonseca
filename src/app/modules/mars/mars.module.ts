import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { MarsComponent } from './mars.component';
import { MarsAllComponent } from './mars-all/mars-all.component';
import { MarsFilterComponent } from './mars-filter/mars-filter.component';
import { ComponentsModule } from '../../shared/components/components.module';



@NgModule({
  declarations: [
    MarsComponent,
    MarsAllComponent,
    MarsFilterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    MarsComponent
  ]
})
export class MarsModule { }
