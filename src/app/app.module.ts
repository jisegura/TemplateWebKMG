import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { KmgHomeComponent } from './component/kmg-home/kmg-home.component';
import { KmgModuloComponent } from './component/kmg-modulo/kmg-modulo.component';
import { KmgMenuComponent } from './component/kmg-menu/kmg-menu.component';
import { KmgNavbarComponent } from './component/kmg-navbar/kmg-navbar.component';
import { KmgPageHeaderComponent } from './component/kmg-page-header/kmg-page-header.component';
import { KmgMenuNavComponent } from './component/kmg-menu-nav/kmg-menu-nav.component';
import { KmgMenuViewerComponent } from './component/kmg-menu-viewer/kmg-menu-viewer.component';
import { KmgIndexComponent } from './component/kmg-index/kmg-index.component';
import { KmgModuloDashboardComponent } from './component/kmg-modulo-dashboard/kmg-modulo-dashboard.component';
import { KmgModuloToolbarComponent } from './component/kmg-modulo-toolbar/kmg-modulo-toolbar.component';
import { KmgLoginComponent } from './component/kmg-login/kmg-login.component';

@NgModule({
  declarations: [
    AppComponent,
    KmgHomeComponent,
    KmgModuloComponent,
    KmgMenuComponent,
    KmgNavbarComponent,
    KmgPageHeaderComponent,
    KmgMenuNavComponent,
    KmgMenuViewerComponent,
    KmgIndexComponent,
    KmgModuloDashboardComponent,
    KmgModuloToolbarComponent,
    KmgLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
