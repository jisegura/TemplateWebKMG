import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KmgHomeComponent } from './component/kmg-home/kmg-home.component';
import { KmgModuloComponent } from './component/kmg-modulo/kmg-modulo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: KmgHomeComponent },
  { path: 'modulo', component: KmgModuloComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
