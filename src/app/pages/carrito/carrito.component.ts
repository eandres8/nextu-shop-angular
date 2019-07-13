import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-carrito',
	templateUrl: './carrito.component.html',
	styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

	total: number = 0;

	constructor(
		public _product: ProductsService,
		private router: Router,
	) { }

	ngOnInit() {
		this._product.tienda.forEach( p => {
			this.total += ( p.cantidad * p.price );
		} );
	}

	pagar = () => {
		this._product.pagarProductos()
			.then( data => {
				console.log(data);
				this._product.tienda = [];
				this.router.navigate(['/home']);
			} )
			.catch( err => {
				console.warn(err);
			} );
	}

}
