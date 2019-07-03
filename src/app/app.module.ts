import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KmgHomeComponent } from './component/kmg-home/kmg-home.component';
import { KmgModuloComponent } from './component/kmg-modulo/kmg-modulo.component';
import { KmgMenuComponent } from './component/kmg-menu/kmg-menu.component';
import { KmgNavbarComponent } from './component/kmg-navbar/kmg-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    KmgHomeComponent,
    KmgModuloComponent,
    KmgMenuComponent,
    KmgNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
