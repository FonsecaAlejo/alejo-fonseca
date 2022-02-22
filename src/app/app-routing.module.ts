import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MarsComponent } from './modules/mars/mars.component';
import { MarsAllComponent } from './modules/mars/mars-all/mars-all.component';
import { MarsFilterComponent } from './modules/mars/mars-filter/mars-filter.component';

const routes: Routes = [
  { 
    path: 'mars',
    component: MarsComponent, 
    children: [
      { path: 'all', component: MarsAllComponent  },
      { path: 'filter', component: MarsFilterComponent  },
      { path: '**', pathMatch: 'full', redirectTo: 'all' }
    ]
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
