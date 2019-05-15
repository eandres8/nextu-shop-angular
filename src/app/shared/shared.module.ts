import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		NavbarComponent,
		ProductoComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		NavbarComponent,
		ProductoComponent,
	],
})
export class SharedModule { }
