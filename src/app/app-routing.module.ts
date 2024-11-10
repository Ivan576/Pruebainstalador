import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ContactComponent } from './contact/contact.component';
import { GaleryComponent } from './gallery/gallery.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'home', component: PrincipalComponent},
  {path:'contact', component: ContactComponent},
  {path:'gallery', component: GaleryComponent},
  {path:'services', component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
