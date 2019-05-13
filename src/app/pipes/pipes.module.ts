import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pipes
import { FiltroProductoPipe } from './filtro-producto.pipe';

@NgModule({
	declarations: [
		FiltroProductoPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		FiltroProductoPipe,
	]
})
export class PipesModule { }
