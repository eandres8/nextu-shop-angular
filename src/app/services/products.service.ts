import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	data: any = [];
	tienda: any[] = [];
	success: boolean = false;
	warning: boolean = false;

	constructor(
		private http: HttpClient,
	) { }


	// =======================================================
	// 
	// =======================================================
	getProducts = () => {
		let url = `${environment.SERVER}/products`;
		return new Promise((resolve, reject) => {
			return this.http.get(url)
				.subscribe((data:any) => {
					// console.log("data from products", data);
					this.data = data.map( e => {
						e.img = `${environment.SERVER}/img/${e.img}`;
						return e;
					} );
					// console.log("data from products modificados", this.data);
					resolve({ok:true});
				},
					err => reject(err)
				);
		});
	}

	// =======================================================
	// 
	// =======================================================
	getPruductById = ( id ) => {
		let url = `${environment.SERVER}/products/${id}`;
		return new Promise((resolve, reject) => {
			return this.http.get(url)
				.subscribe((data: any) => {
					let product:any = data;
					product.img = `${environment.SERVER}/img/${product.img}`;
					resolve({ ok: true, product });
				},
					err => reject(err)
				);
		});
	}

	// =======================================================
	// 
	// =======================================================
	setTienda = ( producto:any ) => {
		console.log("producto set Tienda", producto);
		let parcial: any = this.tienda.find( t => producto.id == t.id );
		if (parcial && parcial.id) {
			this.warning = true;
			this.showAlert();
		} else {
			this.tienda.push(producto);
			this.success = true;
			this.showAlert();
			return true;
		}
	}


	// =======================================================
	// 
	// =======================================================
	showAlert = () => {
		setTimeout( () => {
			this.success = false;
			this.warning = false;
		}, 2500 );
	}
}
