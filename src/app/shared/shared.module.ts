import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
	declarations: [
		NavbarComponent,
		ProductoComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
	],
	exports: [
		NavbarComponent,
		ProductoComponent,
	],
})
export class SharedModule { }
