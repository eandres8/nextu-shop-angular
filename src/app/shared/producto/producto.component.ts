import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-producto',
	templateUrl: './producto.component.html',
	styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

	@Input() data: any;
	imagen: string;

	constructor() { }

	ngOnInit() {
		
	}

}
