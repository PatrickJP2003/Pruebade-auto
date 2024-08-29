import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    {path: 'producto/:id', component: ProductoComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: '**', component: Error404Component },
];
