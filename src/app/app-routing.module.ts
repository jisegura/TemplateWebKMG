import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/service/router/auth.guard';

import { KmgLoginComponent } from '@app/component/kmg-login/kmg-login.component';
import { KmgHomeComponent } from './component/kmg-home/kmg-home.component';
import { KmgModuloComponent } from './component/kmg-modulo/kmg-modulo.component';
import { KmgMenuComponent } from './component/kmg-menu/kmg-menu.component';
import { KmgMenuViewerComponent } from './component/kmg-menu-viewer/kmg-menu-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: KmgLoginComponent },
  { path: 'home', component: KmgHomeComponent },
  { path: 'module', component: KmgModuloComponent },
  {
    path: 'module/:id',
    component: KmgModuloComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'menu/:id', component: KmgMenuViewerComponent }
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
