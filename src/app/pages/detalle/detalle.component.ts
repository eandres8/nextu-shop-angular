import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

	id:number;
	data: any;

	constructor(
		private route: ActivatedRoute,
		private _product: ProductsService,
	) {
		this.id = parseInt(this.route.snapshot.paramMap.get("id"));
		this.data = {};
	}

	ngOnInit() {
		this._product.getPruductById(this.id)
			.then((producto: any) => this.data = producto.product );
	}

}
