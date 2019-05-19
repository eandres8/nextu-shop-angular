import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-producto',
	templateUrl: './producto.component.html',
	styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

	@Input() data: any;
	@Output() lanzarCarrito = new EventEmitter();
	imagen: string;
	cantidad: number;

	constructor() {
		this.cantidad = 1;
	}

	ngOnInit() {
		
	}

	agregar = ( id ) => {
		this.lanzarCarrito.emit({id, cantidad:this.cantidad});
		this.cantidad = 1;
	}

}
