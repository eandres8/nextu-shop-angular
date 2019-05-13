import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
	declarations: [
		NavbarComponent,
		ProductoComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		NavbarComponent,
		ProductoComponent,
	],
})
export class SharedModule { }
