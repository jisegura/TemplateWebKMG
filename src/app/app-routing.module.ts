import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KmgHomeComponent } from './component/kmg-home/kmg-home.component';
import { KmgModuloComponent } from './component/kmg-modulo/kmg-modulo.component';
import { KmgMenuComponent } from './component/kmg-menu/kmg-menu.component';
import { KmgMenuViewerComponent } from './component/kmg-menu-viewer/kmg-menu-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: KmgHomeComponent },
  {
    path: 'module/:id',
    component: KmgModuloComponent,
    children: [
      { path: 'menu', component: KmgMenuViewerComponent }
    ]
  }
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
