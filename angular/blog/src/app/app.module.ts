import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { AppRoutingModule } from './app-routing.module.';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent,
    SegundaPaginaComponent,
    NavegacionComponent,
    UsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
