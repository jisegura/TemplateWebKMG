import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { KmgHomeComponent } from './component/kmg-home/kmg-home.component';
import { KmgModuloComponent } from './component/kmg-modulo/kmg-modulo.component';
import { KmgMenuComponent } from './component/kmg-menu/kmg-menu.component';
import { KmgNavbarComponent } from './component/kmg-navbar/kmg-navbar.component';
import { KmgPageHeaderComponent } from './component/kmg-page-header/kmg-page-header.component';
import { KmgMenuNavComponent } from './component/kmg-menu-nav/kmg-menu-nav.component';
import { KmgMenuViewerComponent } from './component/kmg-menu-viewer/kmg-menu-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    KmgHomeComponent,
    KmgModuloComponent,
    KmgMenuComponent,
    KmgNavbarComponent,
    KmgPageHeaderComponent,
    KmgMenuNavComponent,
    KmgMenuViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
