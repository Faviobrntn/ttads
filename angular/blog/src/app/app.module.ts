import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { AppRoutingModule } from './app-routing.module.';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UsuariosFormularioComponent } from './usuarios-formulario/usuarios-formulario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PrimerPaginaComponent } from './primer-pagina/primer-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent,
    PrimerPaginaComponent,
    SegundaPaginaComponent,
    NavegacionComponent,
    UsuariosComponent,
    LoginComponent,
    UsuariosFormularioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
