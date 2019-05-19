import { Component, OnInit } from '@angular/core';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	filtro: string;

	constructor(
		public _product: ProductsService,
	) {
		this.filtro = '';
	}

	ngOnInit() {
		this._product.getProducts()
			.then( (data:any) => {
				console.log(data);
			} )
			.catch( err => {
				console.log("error");
			} );
	}


	// =======================================================
	// 
	// =======================================================
	agregarCarrito = ( e ) => {
		console.log(e);
		this._product.data.forEach( p => {
			if (e.id == p.id) {
				p.units -= e.cantidad;
				p.cantidad = e.cantidad;
				this._product.setTienda(p);
			}
		} );
	}

}
