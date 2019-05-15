import { RouterModule, Routes } from "@angular/router";

// Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleComponent } from './detalle/detalle.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path:'home', component: HomeComponent},
            {path:'shopping', component: CarritoComponent},
            {path:'product/:id', component: DetalleComponent},
            {path:'', redirectTo:'home',pathMatch:'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );