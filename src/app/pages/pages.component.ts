import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

	constructor(
		public _product: ProductsService
	) { }

	ngOnInit() {
	}

}
