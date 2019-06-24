import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KmgHomeComponent } from './kmg-home/kmg-home.component';
import { KmgModulosComponent } from './kmg-modulos/kmg-modulos.component';

@NgModule({
  declarations: [
    AppComponent,
    KmgHomeComponent,
    KmgModulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
