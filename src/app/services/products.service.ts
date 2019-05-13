import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(
		private http: HttpClient,
	) { }

	getProducts = () => {
		let url = `${environment.SERVER}/products`;
		return new Promise((resolve, reject) => {
			return this.http.get(url)
				.subscribe((data:any) => {
					console.log("data from products", data);
					data.forEach( e => {
						e.img = `${environment.SERVER}/img/${e.img}`;
					} );
					console.log("data from products modificados", data);
					resolve(data);
				},
					err => reject(err)
				);
		});
	}
}
