import { Component, OnInit } from '@angular/core';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	products: any[];
	filtro: string;

	constructor(
		public _product: ProductsService,
	) {
		this.products = [];
		this.filtro = '';
	}

	ngOnInit() {
		this._product.getProducts()
			.then( (data:any) => {
				if ( data.length > 0 ) {
					this.products = data;
				} else {
					this.products = [];
				}
			} )
			.catch( err => {
				console.log("error");
			} );
	}

}
