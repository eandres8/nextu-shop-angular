import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

	transform(value: any[], filtro: string): any[] {
		let newProducts = [];
		newProducts = value.filter( p => p.name.includes(filtro) );
		return newProducts;
	}

}
