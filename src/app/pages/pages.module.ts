import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

// Components
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleComponent } from './detalle/detalle.component';

// Routes
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
	declarations: [
		HomeComponent,
		PagesComponent,
		CarritoComponent,
		DetalleComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PipesModule, 
		FormsModule,
		PAGES_ROUTES,
	]
})
export class PagesModule { }
