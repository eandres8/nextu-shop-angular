import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

	image: string = '';

	constructor(
		public _product: ProductsService
	) {
		this.image = `url(${environment.SERVER}/main-fondo.jpg)`;
	}

	ngOnInit() {
	}

}
