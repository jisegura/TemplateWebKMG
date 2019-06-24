import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KmgHomeComponent } from './kmg-home/kmg-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: KmgHomeComponent }
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
