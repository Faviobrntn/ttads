import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosFormularioComponent } from './usuarios-formulario/usuarios-formulario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PrimerPaginaComponent } from './primer-pagina/primer-pagina.component';

const routes: Routes = [
    {
        path: 'home',
        component: NavegacionComponent,
        /* children: [
            {
                path: 'primer-pagina',
                component: ArticulosComponent
            },
            {
                path: 'articulo',
                component: ArticuloComponent
            },
            {
                path: 'articulo/:id',
                component: ArticuloComponent
            }
        ] */
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'articulos',
        component: ArticulosComponent
    },
    {
        path: 'articulo',
        component: ArticuloComponent
    },
    {
        path: 'articulo/:id',
        component: ArticuloComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent,
        children: [
            {
                path: 'nuevo',
                component: UsuariosFormularioComponent
            },
            {
                path: 'editar/:id',
                component: UsuariosFormularioComponent
            },
            {
                path: 'detalle/:id',
                component: UsuariosFormularioComponent
            },
        ]
    },
    {
        path: 'primer-pagina',
        component: PrimerPaginaComponent
    },
    /* {
        path: 'usuarios/nuevo',
        component: UsuariosFormularioComponent
    }, */
    {
        // REDIRECCION
        path:'**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }