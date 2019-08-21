import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

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