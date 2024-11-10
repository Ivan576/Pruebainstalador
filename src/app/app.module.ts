import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './gallery/gallery.component';
import { LayoutComponent } from "./layout/layout.component";
import { PrincipalComponent } from './principal/principal.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    MenuComponent,
    GaleryComponent,
    PrincipalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
